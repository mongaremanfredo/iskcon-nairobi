import { expect, test } from "@playwright/test";
import { blockApiWrites, fixedTime, publicRoutes } from "./helpers";

for (const route of publicRoutes) {
  test(`${route} loads cleanly`, async ({ page }) => {
    const pageErrors: string[] = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));

    await blockApiWrites(page);
    await page.clock.setFixedTime(fixedTime);
    const response = await page.goto(route, { waitUntil: "load" });

    expect(response?.status()).toBe(200);
    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("main")).toBeVisible();
    expect(pageErrors).toEqual([]);
    expect(await page.locator("h1").count(), "page should have one main heading").toBe(1);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    expect(overflow, "page should not scroll sideways").toBeLessThanOrEqual(0);
  });
}

// Pages are prerendered once, so time-dependent text must not differ from the
// saved HTML at any point in the temple's day.
for (const time of ["05:00", "14:00", "18:00", "23:00"]) {
  test(`hydrates without errors at ${time} Nairobi time`, async ({ page }) => {
    const pageErrors: string[] = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));

    await blockApiWrites(page);
    await page.clock.setFixedTime(new Date(`2026-11-04T${time}:00+03:00`));
    await page.goto("/visit", { waitUntil: "load" });
    await page.waitForTimeout(500);

    expect(pageErrors).toEqual([]);
  });
}

test("homepage hero copy is visible without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();

  await page.goto("/", { waitUntil: "load" });

  await expect(page.locator(".hero-tagline")).toBeVisible();
  await expect(page.locator(".hero-ctas a, .hero-ctas button").first()).toBeVisible();
  await expect(page.locator("h1")).toHaveCount(1);
  await context.close();
});

test("unknown donation funds return a 404", async ({ page }) => {
  const response = await page.goto("/donate/does-not-exist");
  expect(response?.status()).toBe(404);
});

test("the misspelled Radhashtami address redirects", async ({ page }) => {
  await page.goto("/festivals/radhastami");
  await expect(page).toHaveURL(/\/festivals\/radhashtami$/);
});

for (const route of publicRoutes) {
  test(`${route} declares itself as its canonical address`, async ({ page }) => {
    await blockApiWrites(page);
    await page.goto(route, { waitUntil: "domcontentloaded" });

    if (route === "/offline") return;
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(new URL(canonical ?? "").pathname).toBe(route);
  });
}

test("every address in the sitemap loads", async ({ request }) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();
  const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);

  expect(paths.length).toBeGreaterThan(10);
  for (const path of paths) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
  }
});

test("the homepage always lists upcoming dates", async ({ page }) => {
  await blockApiWrites(page);
  await page.clock.setFixedTime(fixedTime);
  await page.goto("/", { waitUntil: "load" });

  const section = page.locator("section", { hasText: "Upcoming" }).filter({ hasText: "Festivals" }).last();
  await expect(section.locator("li").first()).toBeVisible();
});
