import { test, expect } from "@playwright/test";

/**
 * Design System — typography, color tokens, background grid, overflow
 *
 * Four areas tested:
 *  1. font-signet (Stint Ultra Expanded) applied correctly everywhere
 *  2. Fluid display type scale (clamp) at ≥44px minimum
 *  3. Warm palette + accent #FF3200 on primary CTA and Logo
 *  4. 8pt dot grid background
 *  5. Responsive overflow — Stint Ultra Expanded must not cause horizontal
 *     scroll at a 375px mobile viewport
 *  6. TLDR block structure across all case studies
 *  7. Accessibility baseline
 */

// ── Font signet ──────────────────────────────────────────────────────────────

test.describe("Typography — font-signet (Stint Ultra Expanded)", () => {
  test("Howdy! on homepage uses font-signet", async ({ page }) => {
    await page.goto("/");
    // Scoped to main — footer also contains a Howdy! signature
    await expect(page.locator("main").getByText("Howdy!", { exact: true })).toHaveClass(
      /font-signet/
    );
  });

  test("Howdy! on about page uses font-signet", async ({ page }) => {
    await page.goto("/about");
    // Scoped to main — footer also contains a Howdy! signature.
    // .first() because the portrait overlay adds a second aria-hidden Howdy! node.
    await expect(
      page.locator("main").getByText("Howdy!", { exact: true }).first()
    ).toHaveClass(/font-signet/);
  });

  test("case study Howdy signatures use font-signet, not font-sriracha", async ({
    page,
  }) => {
    for (const url of ["/work/air-force", "/work/dcmn", "/work/pfizer"]) {
      await page.goto(url);
      await expect(page.locator(".font-sriracha")).toHaveCount(0);
      await expect(page.locator(".font-signet").first()).toBeVisible();
    }
  });
});

// ── Fluid display scale ──────────────────────────────────────────────────────

test.describe("Typography — fluid display scale", () => {
  test("Air Force H1 is at least 44px (text-display minimum)", async ({
    page,
  }) => {
    await page.goto("/work/air-force");
    const fontSize = await page
      .getByRole("heading", { level: 1 })
      .evaluate((el) => parseFloat(window.getComputedStyle(el).fontSize));
    expect(fontSize).toBeGreaterThanOrEqual(44);
  });

  test("Homepage H1 is at least 44px", async ({ page }) => {
    await page.goto("/");
    const fontSize = await page
      .getByRole("heading", { level: 1 })
      .evaluate((el) => parseFloat(window.getComputedStyle(el).fontSize));
    expect(fontSize).toBeGreaterThanOrEqual(44);
  });
});

// ── Color tokens ─────────────────────────────────────────────────────────────

test.describe("Color — warm palette + accent", () => {
  test("primary CTA background is #FF3200", async ({ page }) => {
    await page.goto("/");
    const bg = await page
      .getByRole("link", { name: "View Work", exact: true })
      .evaluate((el) => window.getComputedStyle(el).backgroundColor);
    expect(bg).toBe("rgb(255, 50, 0)");
  });

  test("Logo SVG path fill attribute is #FF3200", async ({ page }) => {
    await page.goto("/");
    const fill = await page
      .locator('header svg[aria-label="Howdy by Design"] path')
      .getAttribute("fill");
    expect(fill?.toUpperCase()).toBe("#FF3200");
  });
});

// ── 8pt dot grid background ──────────────────────────────────────────────────

test.describe("Background — 8pt dot grid", () => {
  test("body has radial-gradient dot pattern", async ({ page }) => {
    await page.goto("/");
    const bg = await page.evaluate(
      () => window.getComputedStyle(document.body).backgroundImage
    );
    expect(bg).toContain("radial-gradient");
  });

  test("body background-attachment is fixed (canvas effect)", async ({
    page,
  }) => {
    await page.goto("/");
    const att = await page.evaluate(
      () => window.getComputedStyle(document.body).backgroundAttachment
    );
    expect(att).toBe("fixed");
  });
});

// ── Responsive overflow — Stint Ultra Expanded at 375px ─────────────────────

test.describe("Responsive — Stint Ultra Expanded no overflow at 375px", () => {
  // Override the default 1280px viewport for these tests
  test.use({ viewport: { width: 375, height: 812 } });

  for (const url of ["/", "/about", "/work/air-force", "/work/dcmn", "/work/pfizer"]) {
    test(`${url} — no horizontal overflow at 375px`, async ({ page }) => {
      await page.goto(url);

      // scrollWidth > clientWidth means horizontal content is overflowing
      const overflows = await page.evaluate(() => {
        const html = document.documentElement;
        const body = document.body;
        return (
          html.scrollWidth > html.clientWidth ||
          body.scrollWidth > body.clientWidth
        );
      });

      expect(
        overflows,
        `Horizontal overflow detected on ${url} at 375px — check font-signet text sizing`
      ).toBe(false);
    });
  }
});

// ── Nav stagger animation ────────────────────────────────────────────────────

test.describe("Navigation stagger animation", () => {
  test("all nav links are visible after the 300ms stagger budget", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForTimeout(300);
    const items = page.locator("header nav ul li");
    await expect(items).toHaveCount(4);
    for (const item of await items.all()) {
      await expect(item).toBeVisible();
    }
  });
});

// ── TLDR block structure ─────────────────────────────────────────────────────

test.describe("TLDR block — shared pattern", () => {
  for (const url of ["/work/air-force", "/work/dcmn", "/work/pfizer"]) {
    test(`${url} — has at least 3 TLDR rows`, async ({ page }) => {
      await page.goto(url);
      const rows = page.locator(".flex.gap-3.items-baseline");
      await expect(await rows.count()).toBeGreaterThanOrEqual(3);
    });

    test(`${url} — TLDR Problem / Action / Outcome labels present`, async ({
      page,
    }) => {
      await page.goto(url);
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
  }
});

// ── Accessibility baseline ───────────────────────────────────────────────────

test.describe("Accessibility — baseline", () => {
  test("homepage has exactly one H1", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  });

  test("nav logo has accessible aria-label", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator('a[aria-label="Howdy by Design — home"]')
    ).toBeVisible();
  });

  test("all images on Air Force page have non-empty alt text", async ({
    page,
  }) => {
    await page.goto("/work/air-force");
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt, `img[${i}] missing alt`).not.toBeNull();
      expect(alt!.trim().length, `img[${i}] has empty alt`).toBeGreaterThan(0);
    }
  });

  test("decorative elements use aria-hidden", async ({ page }) => {
    await page.goto("/work/air-force");
    // Quote marks and arrow decorations are aria-hidden — verify they exist
    const hidden = page.locator("[aria-hidden='true']");
    expect(await hidden.count()).toBeGreaterThan(0);
  });
});
