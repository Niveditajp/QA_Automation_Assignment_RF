import { test, expect } from '../fixtures/saucedemo';
import { config } from '../../config';

const [productOne, productTwo] = config.ui.products;

test.describe('Cart', () => {
  // The badge is the user-visible aggregate of both successful add actions.
  test('adding two products updates the cart badge to 2', async ({
    loggedInProducts,
  }) => {
    await loggedInProducts.addProductToCartByName(productOne);
    await loggedInProducts.addProductToCartByName(productTwo);

    await expect(loggedInProducts.cartBadge).toHaveText('2');
  });
});