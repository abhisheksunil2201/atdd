import { test, expect } from "@playwright/test";

test("check login", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const logo = page.locator("text=HOUSEWORKS").first();
  const loginText = page.locator("text=Log in").first();
  const loginButton = page.locator("button").first();
  const loginInputs = page.locator("input");
  const loginEmailLabel = page.locator("text=Email");
  const loginPasswordLabel = page.locator("text=Password");
  await expect(logo).toBeVisible();
  await expect(loginText).toBeVisible();
  await expect(loginButton).toBeVisible();
  await expect(loginInputs).toHaveCount(2);
  await expect(loginEmailLabel).toBeVisible();
  await expect(loginPasswordLabel).toBeVisible();
});
