import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { config } from '../../config';

const { users } = config.ui;

// These fixtures keep page construction consistent and expose only the
// workflows that the UI specs need. Playwright creates them per test context.
type SauceFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  checkoutPage: CheckoutPage;
  /** Products page after a fresh standard_user login. */
  loggedInProducts: ProductsPage;
};

export const test = base.extend<SauceFixtures>({
  // Page objects share Playwright's isolated page so each test starts clean.
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  // Login is part of the fixture setup so cart, sorting, and checkout tests
  // can focus on their own behavior instead of repeating authentication.
  loggedInProducts: async ({ page, loginPage, productsPage }, use) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/inventory\.html/);
    await use(productsPage);
  },
});

export { expect };