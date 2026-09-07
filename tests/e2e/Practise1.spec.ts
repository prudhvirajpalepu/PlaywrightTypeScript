import { test, expect } from '@playwright/test';
test.describe('Practise1', () => {

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.sreenidhirajakrishnan.com/practice#section-1");
    await expect(page).toHaveURL(/.*practice.*/);
});

test('enter data in input field', async ({ page }) => {
    await page.getByTestId("text-input").fill("Sreeni Dhirajakrishnan");
    await page.getByTestId("password-input").fill("Sreeni@123");
    await page.getByTestId("form-submit").click();
    await expect(page.getByText("Form submitted successfully")).toBeVisible();
});

test('verify user is able to reset the form', async ({ page }) => {
    await page.getByTestId("form-reset").click();
    await expect(page.getByText("Form was reset")).toBeVisible();

});

test()

});