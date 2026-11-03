import { existsSync, readFileSync, writeFileSync } from "node:fs";
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { blockApiWrites, fixedTime, publicRoutes } from "./helpers";

// A ratchet rather than a pass/fail gate: known issues are recorded here, and a
// test fails only when a page gets worse. Tighten it as fixes land by running
// `npm run test:a11y:update`, and review the diff to confirm counts only fell.
const baselinePath = "tests/e2e/a11y-baseline.json";

type Baseline = Record<string, Record<string, number>>;

function readBaseline(): Baseline {
  return existsSync(baselinePath) ? JSON.parse(readFileSync(baselinePath, "utf8")) : {};
}

for (const route of publicRoutes) {
  test(`${route} has no new accessibility issues`, async ({ page }, testInfo) => {
    await blockApiWrites(page);
    await page.clock.setFixedTime(fixedTime);
    await page.goto(route, { waitUntil: "load" });
    // Let entrance animations finish so contrast is measured on final colours.
    await page.waitForTimeout(2000);

    const { violations } = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    const counts = Object.fromEntries(
      violations.map((violation) => [violation.id, violation.nodes.length]).sort()
    ) as Record<string, number>;
    const key = `${testInfo.project.name} ${route}`;

    if (["all", "changed"].includes(testInfo.config.updateSnapshots)) {
      const baseline = readBaseline();
      baseline[key] = counts;
      const sorted = Object.fromEntries(Object.entries(baseline).sort());
      writeFileSync(baselinePath, `${JSON.stringify(sorted, null, 2)}\n`);
      return;
    }

    const known = readBaseline()[key] ?? {};
    const worse = Object.entries(counts)
      .filter(([rule, count]) => count > (known[rule] ?? 0))
      .map(([rule, count]) => `${rule}: ${known[rule] ?? 0} -> ${count}`);

    expect(worse, "accessibility issues above the recorded baseline").toEqual([]);
  });
}
