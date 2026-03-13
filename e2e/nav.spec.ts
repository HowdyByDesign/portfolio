import { test, expect } from "@playwright/test";

/**
 * Navigation — Logo signet, wordmark, stagger timing, routing
 *
 * Locator strategy: always scope to  or  to avoid
 * colliding with page-body links that share the same label text.
 *
 * Motion timing contract:
 *   All 3 nav links must be visible within 300ms of page load.
 *   Config: delayChildren=120ms + staggerChildren=55ms × 2 = 230ms max.
 */

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  // ── H Signet Logo ───────────────────────────────────────────────────────

  test("H signet SVG is visible in the header", async ({ page }) => {
    const svg = page.locator('header svg[aria-label="Howdy by Design"]');
    await expect(svg).toBeVisible();
  });

  test("H signet path fill attribute is exactly #FF3200", async ({ page }) => {
    const path = page.locator('header svg[aria-label="Howdy by Design"] path');
    const fill = await path.getAttribute("fill");
    expect(fill?.toUpperCase()).toBe("#FF3200");
  });

  test("Logo SVG has role=img", async ({ page }) => {
    await expect(
      page.locator('header svg[aria-label="Howdy by Design"]')
    ).toHaveAttribute("role", "img");
  });

  test("Logo computed fill is rgb(255, 50, 0)", async ({ page }) => {
    const fill = await page
      .locator('header svg[aria-label="Howdy by Design"] path')
      .evaluate((el) => window.getComputedStyle(el).fill);
    expect(fill).toBe("rgb(255, 50, 0)");
  });

  // ── Wordmark ────────────────────────────────────────────────────────────

  test("Ben Howard wordmark is visible", async ({ page }) => {
    await expect(
      page.locator("header").getByText("Ben Howard", { exact: true })
    ).toBeVisible();
  });

  test("logo lockup links to /", async ({ page }) => {
    await expect(
      page.locator('header a[aria-label="Howdy by Design — home"]')
    ).toHaveAttribute("href", "/");
  });

  // ── Nav links ───────────────────────────────────────────────────────────

  test("Work, About, and Contact are present", async ({ page }) => {
    const nav = page.locator("header nav");
    await expect(nav.getByRole("link", { name: "Work",  exact: true })).toBeVisible();
    await expect(nav.getByRole("link", { name: "About", exact: true })).toBeVisible();
    await expect(nav.getByText("Contact", { exact: true })).toBeVisible();
  });

  test("Work link has font-medium active state on homepage", async ({ page }) => {
    const workLink = page.locator("header nav")
      .getByRole("link", { name: "Work", exact: true });
    await expect(workLink).toHaveClass(/font-medium/);
  });

  test("About link navigates to /about", async ({ page }) => {
    await page.locator("header nav")
      .getByRole("link", { name: "About", exact: true })
      .click();
    await expect(page).toHaveURL("/about");
  });

  test("About link is active on /about", async ({ page }) => {
    await page.goto("/about");
    await expect(
      page.locator("header nav").getByRole("link", { name: "About", exact: true })
    ).toHaveClass(/font-medium/);
  });

  // ── Stagger timing contract ─────────────────────────────────────────────

  test("all 4 nav links visible within 300ms stagger budget", async ({ page }) => {
    // delayChildren 120ms + staggerChildren 55ms × 3 = 285ms for last link (LinkedIn icon).
    // Waiting 300ms ensures every item is well into its reveal animation.
    await page.waitForTimeout(300);
    const items = page.locator("header nav ul li");
    await expect(items).toHaveCount(4);
    for (const item of await items.all()) {
      await expect(item).toBeVisible();
    }
  });

  test("logo leads: first link still hidden at 80ms", async ({ page }) => {
    await page.waitForTimeout(80);
    // Logo starts at 0ms — it is already animating
    await expect(
      page.locator('header svg[aria-label="Howdy by Design"]')
    ).toBeVisible();
    // First nav link has delayChildren=120ms, so at 80ms opacity should be 0
    const opacity = await page.locator("header nav ul li").first()
      .evaluate((el) => parseFloat(window.getComputedStyle(el).opacity));
    expect(opacity).toBeLessThan(0.5);
  });

  // ── Positioning ─────────────────────────────────────────────────────────

  test("header is fixed-positioned", async ({ page }) => {
    await expect(page.locator("header")).toHaveCSS("position", "fixed");
  });

  test("header has backdrop-blur glassmorphism", async ({ page }) => {
    await expect(page.locator("header")).toHaveClass(/backdrop-blur/);
  });
});
