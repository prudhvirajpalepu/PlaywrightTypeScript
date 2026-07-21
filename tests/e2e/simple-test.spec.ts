import { test, expect } from '@playwright/test';

test('My First Playwright Test', async ({ page }) => {
  
  await page.goto('https://playwright.dev');
  
  // Check if title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
  
  console.log('✅ First test passed successfully!');
});

test('Check Get Started Button', async ({ page }) => {
  
  await page.goto('https://playwright.dev');
  
  await page.getByRole('link', { name: 'Get started' }).click();
  
  await expect(page).toHaveURL(/.*intro/);
  
  console.log('✅ Second test passed successfully!');
});