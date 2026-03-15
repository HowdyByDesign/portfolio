import { test, expect } from "@playwright/test";

/**
 * Homepage — hero, impact metrics, case study list, credentials
 *
 * Locator discipline applied throughout:
 *  • { exact: true } on getByText() prevents parent-container false-positives
 *    (Playwright's default is substring, so "Pfizer" matches the <a> card wrapper
 *    AND the inner <span>, causing strict-mode violations).
 *  • Scope "About" to `main` — the nav has an identical "About" link.
 *  • Scope client names to `#work` — the credentials section also has "Pfizer".
 *  • Use .first() only where multiple identical exact matches are structurally
 *    expected (e.g. the NDA badge and its parent wrapper).
 */

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  // ── Hero ──────────────────────────────────────────────────────────────────

  test("renders Howdy! brand signature in font-signet", async ({ page }) => {
    // Scoped to main — footer also contains a Howdy! signature
    const greeting = page.locator("main").getByText("Howdy!", { exact: true });
    await expect(greeting).toBeVisible();
    await expect(greeting).toHaveClass(/font-signet/);
  });

  test("renders role label", async ({ page }) => {
    await expect(
      page.getByText("UX Strategist · 10 Years Experience", {
        exact: true,
      })
    ).toBeVisible();
  });

  test("H1 is present and contains the brand statement", async ({ page }) => {
    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("I orchestrate solutions");
  });

  // ── CTAs ──────────────────────────────────────────────────────────────────

  test("View Work and About CTAs are in the hero", async ({ page }) => {
    // Scope to main — the nav also contains an "About" link.
    const main = page.locator("main");
    await expect(
      main.getByRole("link", { name: "View Work", exact: true })
    ).toBeVisible();
    // .first() because the hero <a> and its parent container both match
    await expect(
      main.getByRole("link", { name: "About", exact: true }).first()
    ).toBeVisible();
  });

  test("View Work links to the #work anchor", async ({ page }) => {
    const link = page
      .locator("main")
      .getByRole("link", { name: "View Work", exact: true });
    await expect(link).toHaveAttribute("href", "#work");
  });

  // ── Hero impact metric grid ───────────────────────────────────────────────

  test("renders three impact metric cards below the hero copy", async ({
    page,
  }) => {
    // The <p> textContent includes the unit span text: "10yrs", "4k+", "3×".
    // exact: true matches the <p> itself; parent <div> text is longer so it won't match.
    await expect(page.getByText("10yrs", { exact: true })).toBeVisible();
    await expect(page.getByText("4k+",  { exact: true })).toBeVisible();
    await expect(page.getByText("3×",   { exact: true })).toBeVisible();
  });

  test("metric labels describe the stats", async ({ page }) => {
    await expect(
      page.getByText("Enterprise UX strategy experience", { exact: true })
    ).toBeVisible();
    await expect(
      page.getByText("Daily active users on live systems", { exact: true })
    ).toBeVisible();
    await expect(
      page.getByText(/Fortune 500/).first()
    ).toBeVisible();
  });

  // ── Case study list ───────────────────────────────────────────────────────

  test("Selected Work heading is visible", async ({ page }) => {
    await expect(
      page.getByText("Selected Work", { exact: true })
    ).toBeVisible();
  });

  test("renders exactly 3 case study card links", async ({ page }) => {
    await expect(page.locator("#work").getByRole("link")).toHaveCount(3);
  });

  test("case study cards show client names", async ({ page }) => {
    // Scope to #work so we don't match the credentials section below.
    // exact: true prevents matching the card's parent <a> wrapper.
    const work = page.locator("#work");
    await expect(
      work.getByText("U.S. Armed Forces", { exact: true })
    ).toBeVisible();
    await expect(work.getByText("DCMN", { exact: true })).toBeVisible();
    await expect(work.getByText("Pfizer", { exact: true })).toBeVisible();
  });

  test("NDA badge is visible on the Air Force card", async ({ page }) => {
    // The badge renders as a <span> — regex avoids the middle-dot character issue
    await expect(
      page.locator("#work").getByText(/NDA/).first()
    ).toBeVisible();
  });

  test("Air Force card links to /work/air-force", async ({ page }) => {
    await expect(page.locator('a[href="/work/air-force"]')).toBeVisible();
  });

  test("DCMN card links to /work/dcmn", async ({ page }) => {
    await expect(page.locator('a[href="/work/dcmn"]')).toBeVisible();
  });

  test("Pfizer card links to /work/pfizer", async ({ page }) => {
    await expect(page.locator('a[href="/work/pfizer"]')).toBeVisible();
  });

  // ── Credentials section ───────────────────────────────────────────────────

  test("Clients I've Worked With section is present", async ({ page }) => {
    // Partial match avoids the apostrophe-encoding edge case
    await expect(page.getByText(/Clients I.ve Worked With/).first()).toBeVisible();
  });

  test("credentials list shows all 3 clients", async ({ page }) => {
    // exact: true targets the <p> label directly, not its parent containers
    await expect(
      page.getByText("U.S. Air Force", { exact: true }).first()
    ).toBeVisible();
    await expect(
      page.getByText("Pfizer", { exact: true }).first()
    ).toBeVisible();
    await expect(
      page.getByText("Capital Group", { exact: true }).first()
    ).toBeVisible();
  });

  // ── Background grid ───────────────────────────────────────────────────────

  test("body has the radial-gradient dot grid background", async ({ page }) => {
    const bg = await page.evaluate(
      () => window.getComputedStyle(document.body).backgroundImage
    );
    expect(bg).toContain("radial-gradient");
  });

  test("body background-attachment is fixed (canvas effect)", async ({
    page,
  }) => {
    const attachment = await page.evaluate(
      () => window.getComputedStyle(document.body).backgroundAttachment
    );
    expect(attachment).toBe("fixed");
  });
});
