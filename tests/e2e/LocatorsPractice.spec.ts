// import { test, expect } from '@playwright/test';

// test.describe('Practice Locators',  () => {

//     test.beforeAll(async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/login');
//     });

//         test('Verify Login Page', async ({ page }) => {
//         await expect(page).toHaveTitle(/The Internet/);
//         });

//         test('Enter Username and Password', async ({ page }) => {
//             await page.getByLabel('Username').fill('tomsmith');
//             await page.getByLabel('Password').fill('SuperSecretPassword!');
//             await page.getByRole('button', { name: 'Login' }).click();
//         });

//         test('verify user logged out', async ({ page }) => {
//             await page.getByRole('button', { name: 'Logout' }).click();
//             await expect(page).toHaveURL(/.*login/);
//         });
//     });

import { test, expect, chromium, Browser, Page } from '@playwright/test';

let browser: Browser;
let page: Page;

test.beforeAll(async () => {
    browser = await chromium.launch({ headless: true });

    page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/login');
});

test.afterAll(async () => {
    await browser.close();
});

test('Verify Login Page', async () => {
    await expect(page).toHaveTitle(/The Internet/);
});

test('Login', async () => {
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();
    console.log('Current URL after login:', page.url());
});

test('Verify User Logged Out', async ({ page }) => {

    console.log('Current URL before logout:', page.url());
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    console.log('Current URL after logout:', page.url());
    await expect(page).toHaveURL(/.*login/);
});