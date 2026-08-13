import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly shoppingCartBadge: Locator;
  readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.shoppingCartLink = page.locator('.shopping_cart_link');
  }

  async expectOnInventoryPage() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.title).toHaveText('Products');
  }

  async addProductToCart(productName: string) {
    await this.page
      .locator('.inventory_item')
      .filter({ hasText: productName })
      .locator('button')
      .click();
  }

  async getCartCount() {
    return await this.shoppingCartBadge.textContent();
  }

  async expectCartCount(count: string) {
    await expect(this.shoppingCartBadge).toHaveText(count);
  }

  async openCart() {
    await this.shoppingCartLink.click();
  }
}