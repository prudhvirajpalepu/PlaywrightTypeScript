import { test, expect, chromium, BrowserContext, Page } from '@playwright/test';

test.describe('launch simple browser', () => {

  let context: BrowserContext;
  let page: Page;

  // Launch browser only once
  test.beforeAll(async () => {
    context = await chromium.launchPersistentContext('./temp-profile', {
      headless: false,
      args: [
        '--disable-features=PasswordManagerOnboarding,PasswordCheck,PasswordLeakDetection',
        '--disable-save-password-bubble'
      ]
    });

    page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
  });

  // Close browser after all tests
  test.afterAll(async () => {
    await context.close();
  });

  test('page should load', async () => {
    await expect(page).toHaveURL(/saucedemo\.com/);
  });

  test('login with valid creds', async () => {
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/inventory\.html/);
  });

  test('click on side menu and navigate', async () => {
    // Menu button is only available after login
    await page.locator('#react-burger-menu-btn').click();
    await page.getByLabel("About").click();
    await expect(page.locator('#about_sidebar_link')).toBeVisible();
  });

});