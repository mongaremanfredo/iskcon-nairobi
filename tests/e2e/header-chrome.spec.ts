import { expect, test, type Page } from "@playwright/test";
import { blockApiWrites } from "./helpers";

// The status bar, HKTC sub-nav, and noticeboard all pin to the header, which shrinks
// as the page scrolls. These tests scroll for real and measure the rendered positions,
// because a screenshot taken back at the top of the page cannot see a gap.
const TOLERANCE = 0.75;

async function statusBarGap(page: Page) {
  return page.evaluate(() => {
    const header = document.querySelector(".site-nav")!.getBoundingClientRect();
    const bar = [...document.querySelectorAll<HTMLElement>("div.fixed")].find((element) =>
      element.style.top.includes("site-header-height")
    )!;
    return bar.getBoundingClientRect().top - header.bottom;
  });
}

async function scrollTo(page: Page, top: number) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), top);
}

// Records the widest gap on every painted frame while the header animates.
async function widestGapWhileScrolling(page: Page, top: number) {
  return page.evaluate(
    ({ y }) =>
      new Promise<number>((resolve) => {
        const header = document.querySelector(".site-nav")!;
        const bar = [...document.querySelectorAll<HTMLElement>("div.fixed")].find((element) =>
          element.style.top.includes("site-header-height")
        )!;
        const started = performance.now();
        let widest = -Infinity;
        window.scrollTo({ top: y, behavior: "instant" });
        const measure = () => {
          widest = Math.max(widest, bar.getBoundingClientRect().top - header.getBoundingClientRect().bottom);
          if (performance.now() - started < 1200) requestAnimationFrame(measure);
          else resolve(widest);
        };
        requestAnimationFrame(measure);
      }),
    { y: top }
  );
}

test.beforeEach(async ({ page }) => {
  await blockApiWrites(page);
});

for (const route of ["/", "/visit"]) {
  test(`${route}: the status bar stays attached to the header`, async ({ page }) => {
    await page.goto(route, { waitUntil: "load" });
    await page.waitForTimeout(1000);

    expect(await widestGapWhileScrolling(page, 700), "gap during the first scroll").toBeLessThanOrEqual(TOLERANCE);
    await page.waitForTimeout(500);
    expect(Math.abs(await statusBarGap(page)), "offset once settled").toBeLessThanOrEqual(TOLERANCE);

    // Returning to the top and scrolling again must land in the same place.
    await scrollTo(page, 0);
    await page.waitForTimeout(800);
    expect(await widestGapWhileScrolling(page, 900), "gap during the second scroll").toBeLessThanOrEqual(TOLERANCE);
    await page.waitForTimeout(500);
    expect(Math.abs(await statusBarGap(page)), "offset after the second scroll").toBeLessThanOrEqual(TOLERANCE);
  });
}

test("the status bar stays attached between the phone and desktop menus", async ({ page }) => {
  await page.setViewportSize({ width: 1000, height: 800 });
  await page.goto("/", { waitUntil: "load" });
  await page.waitForTimeout(1000);
  await scrollTo(page, 700);
  await page.waitForTimeout(800);
  expect(Math.abs(await statusBarGap(page))).toBeLessThanOrEqual(TOLERANCE);
});

test("the status bar reattaches after the window is resized", async ({ page }) => {
  await page.goto("/", { waitUntil: "load" });
  await page.waitForTimeout(1000);
  await scrollTo(page, 700);
  await page.waitForTimeout(800);

  const { width, height } = page.viewportSize()!;
  await page.setViewportSize({ width: height, height: width });
  await page.waitForTimeout(800);
  expect(Math.abs(await statusBarGap(page))).toBeLessThanOrEqual(TOLERANCE);
});

test("the HKTC sub-navigation pins directly under the header", async ({ page }) => {
  await page.goto("/projects/hktc-nairobi", { waitUntil: "load" });
  await page.waitForTimeout(1000);
  await scrollTo(page, 1600);
  await page.waitForTimeout(800);

  const offset = await page.evaluate(() => {
    const header = document.querySelector(".site-nav")!.getBoundingClientRect();
    const subNav = document.querySelector('nav[aria-label="HKTC page sections"]')!.getBoundingClientRect();
    return subNav.top - header.bottom;
  });
  expect(Math.abs(offset)).toBeLessThanOrEqual(TOLERANCE);
});

test("the noticeboard opens directly under the status bar on phones", async ({ page, isMobile }) => {
  test.skip(!isMobile, "The panel is anchored to its button on wider screens.");

  await page.goto("/", { waitUntil: "load" });
  await page.waitForTimeout(1000);
  await scrollTo(page, 700);
  await page.waitForTimeout(800);
  await page.getByRole("button", { name: "Open temple noticeboard" }).click();
  await page.waitForTimeout(300);

  const offset = await page.evaluate(() => {
    const bar = [...document.querySelectorAll<HTMLElement>("div.fixed")].find((element) =>
      element.style.top.includes("site-header-height")
    )!;
    const panel = document.querySelector(".z-\\[90\\]")!;
    return panel.getBoundingClientRect().top - bar.getBoundingClientRect().bottom;
  });
  expect(Math.abs(offset)).toBeLessThanOrEqual(TOLERANCE);
});
