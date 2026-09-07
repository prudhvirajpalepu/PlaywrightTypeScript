import {expect, test} from '@playwright/test'
import { LoginPage } from '../../playwright/pages/LoginPage'
import loginData from '../../playwright/test-data/loginData.json'


test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      loginData.valid_user.username,
      loginData.valid_user.password
    );
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

test('valid login test', async ({ page }) => {

     // await loginPage.verifyLoginSuccess();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

test.skip('invalid login test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    // await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.login(
        loginData.invalid_user.username,
        loginData.invalid_user.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
});

test('able to add a product in cart', async ({ page }) => {

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});