import { test, expect } from '../fixtures/saucedemo';
import { config } from '../../config';

const { users, lockedOutError } = config.ui;

test.describe('Login', () => {
  // Verifies both navigation and the first authenticated page's key content.
  test('standard user can log in and land on the products page', async ({
    page,
    loginPage,
  }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByTestId('title')).toHaveText('Products');
    await expect(page.getByTestId('inventory-list')).toBeVisible();
  });

  // A locked account must show the service error and remain outside inventory.
  test('locked-out user sees an error and is not logged in', async ({
    page,
    loginPage,
  }) => {
    await loginPage.goto();
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);

    await expect(loginPage.errorMessage).toHaveText(lockedOutError);
    await expect(page).not.toHaveURL(/inventory/);
    await expect(page.getByTestId('inventory-list')).toHaveCount(0);
  });
});