import { test, expect } from '../fixtures/saucedemo';
import { config } from '../../config';

const [productOne, productTwo] = config.ui.products;
const { firstName, lastName, postalCode } = config.ui.checkout;

test.describe('Checkout', () => {
  // Covers the complete purchase path from an authenticated inventory page.
  test('completes checkout and shows the thank-you message', async ({
    loggedInProducts,
    checkoutPage,
  }) => {
    await loggedInProducts.addProductToCartByName(productOne);
    await loggedInProducts.addProductToCartByName(productTwo);
    await loggedInProducts.goToCart();

    await checkoutPage.startCheckout();
    await checkoutPage.fillInfo(firstName, lastName, postalCode);
    await checkoutPage.finish();

    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });
});