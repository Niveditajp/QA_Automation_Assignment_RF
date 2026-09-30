import { type Page, type Locator } from '@playwright/test';

/** SauceDemo inventory page (`/inventory.html`). */
export class ProductsPage {
  readonly page: Page;
  readonly inventoryList: Locator;
  readonly inventoryItems: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;
  readonly sortDropdown: Locator;
  readonly inventoryItemPrices: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryList = page.getByTestId('inventory-list');
    this.inventoryItems = page.getByTestId('inventory-item');
    this.cartBadge = page.getByTestId('shopping-cart-badge');
    this.cartLink = page.getByTestId('shopping-cart-link');
    this.sortDropdown = page.getByTestId('product-sort-container');
    this.inventoryItemPrices = page.getByTestId('inventory-item-price');
  }

  /**
   * Adds a product by visible name. The click is scoped to that inventory
   * card so item order on the page does not matter.
   */
  async addProductToCartByName(name: string) {
    const item = this.inventoryItems.filter({ hasText: name });
    await item.getByRole('button', { name: /add to cart/i }).click();
  }

  /** Selects the visible sort option so tests remain independent of option values. */
  async sortBy(label: string) {
    await this.sortDropdown.selectOption({ label });
  }

  async getAllPrices(): Promise<number[]> {
    const texts = await this.inventoryItemPrices.allInnerTexts();
    return texts.map((t) => parseFloat(t.replace('$', '')));
  }

  /** Navigates through the cart icon while keeping navigation out of the specs. */
  async goToCart() {
    await this.cartLink.click();
  }
}