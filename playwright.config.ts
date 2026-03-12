import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright configuration for Howdy by Design portfolio.
 *
 * Runs against the local Next.js dev server on port 3000.
 * Set `reuseExistingServer: true` so `npm run dev` doesn't have to be
 * killed and restarted every time you run tests locally.
 *
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./e2e",

  // Run tests in parallel
  fullyParallel: true,

  // Fail the build on CI if test.only is left in source
  forbidOnly: !!process.env.CI,

  // Retry once on CI; no retries locally (fail fast for dev speed)
  retries: process.env.CI ? 1 : 0,

  // Limit parallelism on CI
  workers: process.env.CI ? 1 : undefined,

  // Reporter — HTML for local, line for CI
  reporter: process.env.CI ? "line" : [["html", { open: "never" }]],

  use: {
    // All tests use this as the base
    baseURL: "http://localhost:3000",

    // Capture trace on first retry only (keeps things fast)
    trace: "on-first-retry",

    // Screenshot on failure
    screenshot: "only-on-failure",

    // Viewport matches our max-w-5xl breakpoint context
    viewport: { width: 1280, height: 800 },
  },

  projects: [
    {
      name: "desktop-chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chrome",
      use: {
        ...devices["Pixel 5"],
        // Reduced-motion to test grid hide + animation fallbacks
        contextOptions: {
          reducedMotion: "no-preference",
        },
      },
    },
  ],

  // Start the Next.js dev server before the test run.
  // If it's already running (local dev), reuse it rather than killing it.
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    stdout: "ignore",
    stderr: "pipe",
  },
});
