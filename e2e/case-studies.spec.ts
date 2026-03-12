import { test, expect } from "@playwright/test";

/**
 * Case Study pages — TLDR, sticky meta, typography, Howdy signatures
 *
 * Locator discipline:
 *  - exact: true for all project titles and short metric labels.
 *  - .first() where multiple identical matches are structural (badge lists,
 *    "Export Squadron Report" which appears in mock UI + adjacent caption).
 *  - "Trust" exact match is critical — prevents matching the Pfizer H1
 *    "Designing for Trust in a Gen AI…" which contains "Trust" as a substring.
 */

const studies = [
  {
    name: "Air Force",
    url: "/work/air-force",
    headline: "Modernizing Mission-Critical Training at Scale",
    metricExact: "Millions",
    tldrOutcome: "4,000+ daily users at launch",
    stickyLabels: ["Role", "Timeline", "Daily Active Users"],
  },
  {
    name: "DCMN",
    url: "/work/dcmn",
    headline: "Eliminating 400 Hours of Monthly Reporting Waste",
    metricExact: "30+ Hours",
    tldrOutcome: "400 hrs/month eliminated",
    stickyLabels: ["Role", "Timeline", "Impact"],
  },
  {
    name: "Pfizer",
    url: "/work/pfizer",
    headline: "Designing for Trust in a Gen AI Marketing System",
    metricExact: "Trust",
    tldrOutcome: "MVP delivered for beta onboarding",
    stickyLabels: ["Role", "Deliverables", "Status"],
  },
];

for (const study of studies) {
  test.describe(`${study.name} case study`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(study.url);
    });

    test("breadcrumb back link navigates to /", async ({ page }) => {
      const back = page.getByRole("link", { name: /work/i }).first();
      await expect(back).toBeVisible();
      await expect(back).toHaveAttribute("href", "/");
    });

    test("H1 contains the correct headline", async ({ page }) => {
      await expect(page.getByRole("heading", { level: 1 })).toContainText(
        study.headline
      );
    });

    test("primary impact metric is visible", async ({ page }) => {
      // exact: true prevents "Trust" matching the H1 substring
      await expect(
        page.getByText(study.metricExact, { exact: true }).first()
      ).toBeVisible();
    });

    test("TLDR renders Problem, Action, Outcome labels", async ({ page }) => {
      await expect(
        page.getByText("Problem", { exact: true }).first()
      ).toBeVisible();
      await expect(
        page.getByText("Action", { exact: true }).first()
      ).toBeVisible();
      await expect(
        page.getByText("Outcome", { exact: true }).first()
      ).toBeVisible();
    });

    test("TLDR Outcome row contains the headline metric", async ({ page }) => {
      const outcomeRow = page
        .locator(".flex.gap-3.items-baseline")
        .filter({ hasText: "Outcome" });
      await expect(outcomeRow).toContainText(study.tldrOutcome);
    });

    test("sticky meta bar labels visible after scroll", async ({ page }) => {
      await page.evaluate(() => window.scrollBy(0, 400));
      for (const label of study.stickyLabels) {
        await expect(
          page.getByText(label, { exact: true }).first()
        ).toBeVisible();
      }
    });

    test("Howdy signature uses font-signet class", async ({ page }) => {
      await expect(page.locator(".font-signet").first()).toBeVisible();
    });
  });
}

// ── Air Force specifics ─────────────────────────────────────────────────────

test.describe("Air Force — specific content", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/work/air-force");
  });

  test("Squadron Roster View and MSgt Chen row are present", async ({
    page,
  }) => {
    await page.getByText("Squadron Roster View").scrollIntoViewIfNeeded();
    await expect(page.getByText("MSgt Chen, R.")).toBeVisible();
  });

  test("status badge variants render in the System Atoms section", async ({
    page,
  }) => {
    await page.getByText("Status Badges").scrollIntoViewIfNeeded();
    // "Ready" appears once per badge row in a list — .first() is intentional
    await expect(
      page.getByText("Ready", { exact: true }).first()
    ).toBeVisible();
    await expect(
      page.getByText("Overdue", { exact: true }).first()
    ).toBeVisible();
  });

  test("Export Squadron Report button is present", async ({ page }) => {
    // Appears in mock UI + adjacent caption — button text includes surrounding
    // content so exact: true finds nothing. Substring + .first() is correct here.
    await expect(
      page.getByText("Export Squadron Report").first()
    ).toBeVisible();
  });

  test("Phase 2 approved is mentioned", async ({ page }) => {
    await expect(page.getByText(/Phase 2 approved/i).first()).toBeVisible();
  });
});

// ── DCMN specifics ──────────────────────────────────────────────────────────

test.describe("DCMN — specific content", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/work/dcmn");
  });

  test("Janine editorial quote is visible", async ({ page }) => {
    await expect(
      page.getByText(/At the start of each month, I had five reports due/)
    ).toBeVisible();
  });

  test("Janine attribution line is visible", async ({ page }) => {
    await expect(
      page.getByText(/Janine · Senior Marketing Strategist/i)
    ).toBeVisible();
  });

  test("EfficiencyMap Before column is rendered", async ({ page }) => {
    await expect(page.getByText(/Before/i).first()).toBeVisible();
  });
});

// ── Pfizer specifics ────────────────────────────────────────────────────────

test.describe("Pfizer — specific content", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/work/pfizer");
  });

  test('"Trust" display metric has large computed font-size', async ({
    page,
  }) => {
    // exact: true — matches only the element whose COMPLETE text is "Trust"
    const trustEl = page.getByText("Trust", { exact: true }).first();
    await expect(trustEl).toBeVisible();

    const fontSize = await trustEl.evaluate(
      (el) => parseFloat(window.getComputedStyle(el).fontSize)
    );
    // clamp(4rem, 10vw, 7rem): at 1280px → 10vw=128px, capped at 7rem=112px
    // At any viewport ≥ 640px, minimum is 4rem = 64px
    expect(fontSize).toBeGreaterThan(60);
  });

  test("Prompt Architecture Input and Output nodes are present", async ({
    page,
  }) => {
    await page.getByText("Generation Pipeline").scrollIntoViewIfNeeded();
    await expect(
      page.getByText("Input Parameters", { exact: true })
    ).toBeVisible();
    await expect(
      page.getByText("Output + Provenance", { exact: true })
    ).toBeVisible();
  });

  test("Generate Campaign Brief outcome button is present", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /Generate Campaign Brief/i })
    ).toBeVisible();
  });

  test("Idea Accelerator before/after reframe blocks exist", async ({ page }) => {
    await page.getByText(/Idea Accelerator/i).first().scrollIntoViewIfNeeded();
    await expect(page.getByText(/Before the reframe/)).toBeVisible();
    await expect(page.getByText(/After the reframe/)).toBeVisible();
  });

  test("Howdy callout pull-quote uses font-signet", async ({ page }) => {
    const quote = page.locator(".font-signet").filter({ hasText: /blank page/i });
    await quote.scrollIntoViewIfNeeded();
    await expect(quote).toBeVisible();
  });
});
