import { test, expect } from "@playwright/test";

test("should have the correct title", async ({ page }) => {
  await page.goto("https://example.com");
  const title = await page.title();
  expect(title).toBe("Example Domain");
});

test("should have a heading", async ({ page }) => {
  await page.goto("https://example.com");
  const heading = await page.locator("h1").textContent();
  expect(heading).toBe("Example Domain");
});

test("should have a link to more information", async ({ page }) => {
  await page.goto("https://example.com");
  const link = await page.locator("a").getAttribute("href");
  expect(link).toBe("https://www.iana.org/domains/example");
});
