import { test, expect } from "@playwright/test";

test.describe("My Test Suite", () => {
  test("should have the correct title", async ({ page }) => {
    await page.goto("https://example.com");
    const title = await page.title();
    expect(title).toBe("Example Domain");
  });

  test("should have a visible heading", async ({ page }) => {
    await page.goto("https://example.com");
    const heading = await page.locator("h1");
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText("Example Domain");
  });
});
