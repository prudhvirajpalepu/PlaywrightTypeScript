import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { sauceUsers, products } from '../test-data/sauceData';


test.describe('Sauce Demo - Page Object Model Example', () => {

  test('should login successfully and add products to cart', async ({ page }) => {
//  await loginPage.login('admin', 'password');
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // Step 1: Go to login page
    await loginPage.goto();

    // Step 2: Login with valid credentials
    await loginPage.login(sauceUsers.standard.username, sauceUsers.standard.password);

    // Step 3: Verify user is on Inventory page
    await inventoryPage.expectOnInventoryPage();

    // Step 4: Add products to cart
    await inventoryPage.addProductToCart(products.backpack);
    await inventoryPage.addProductToCart(products.bikeLight);

    // Step 5: Verify cart count
    await inventoryPage.expectCartCount('2');
  });

  test('should show error for locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(sauceUsers.locked.username, sauceUsers.locked.password);

    // Verify error message is shown
    await loginPage.expectLoginError();
  });

});