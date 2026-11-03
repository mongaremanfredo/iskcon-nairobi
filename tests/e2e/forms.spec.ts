import { expect, test, type Page } from "@playwright/test";
import { blockApiWrites } from "./helpers";

// API writes are always intercepted here, so these tests never reach Google Sheets
// or send email.
async function failNextSubmission(page: Page) {
  await page.route("**/api/contact", (route) =>
    route.fulfill({ status: 500, json: { message: "The office could not be reached." } })
  );
}

test.describe("contact form", () => {
  test.beforeEach(async ({ page }) => {
    await blockApiWrites(page);
    await page.goto("/contact", { waitUntil: "load" });
  });

  const fill = async (page: Page, email = "visitor@example.com") => {
    await page.getByLabel("First Name").fill("Test");
    await page.getByLabel("Email Address").fill(email);
    await page.getByLabel("Message").fill("A test message.");
  };

  test("explains what is missing", async ({ page }) => {
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByRole("alert").filter({ hasText: "Please add your name" })).toBeVisible();
  });

  test("catches a mistyped email address", async ({ page }) => {
    await fill(page, "not-an-address");
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByRole("alert").filter({ hasText: "check your email" })).toBeVisible();
  });

  test("confirms success and clears the form", async ({ page }) => {
    await fill(page);
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByRole("status").filter({ hasText: "has been received" })).toBeVisible();
    await expect(page.getByLabel("Message")).toHaveValue("");
  });

  test("keeps what was typed when sending fails", async ({ page }) => {
    await failNextSubmission(page);
    await fill(page);
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByRole("alert").filter({ hasText: "could not be reached" })).toBeVisible();
    await expect(page.getByLabel("Message")).toHaveValue("A test message.");
  });
});

test.describe("guest house form", () => {
  test.beforeEach(async ({ page }) => {
    await blockApiWrites(page);
    await page.goto("/guest-house", { waitUntil: "load" });
  });

  const fill = async (page: Page) => {
    await page.getByLabel("Full Name").fill("Test");
    await page.getByLabel("Email Address").fill("visitor@example.com");
    await page.getByLabel("Message").fill("A test enquiry.");
  };

  test("rejects a departure before the arrival", async ({ page }) => {
    await fill(page);
    await page.getByLabel("Arrival Date").fill("2026-12-10");
    await page.getByLabel("Departure Date").fill("2026-12-05");
    await page.getByRole("button", { name: "Send Enquiry" }).click();
    await expect(page.getByRole("alert").filter({ hasText: "departure date" })).toBeVisible();
  });

  test("confirms success", async ({ page }) => {
    await fill(page);
    await page.getByRole("button", { name: "Send Enquiry" }).click();
    await expect(page.getByRole("status").filter({ hasText: "has been received" })).toBeVisible();
  });

  test("shows an error when sending fails", async ({ page }) => {
    await failNextSubmission(page);
    await fill(page);
    await page.getByRole("button", { name: "Send Enquiry" }).click();
    await expect(page.getByRole("alert").filter({ hasText: "could not be reached" })).toBeVisible();
    await expect(page.getByLabel("Message")).toHaveValue("A test enquiry.");
  });
});
