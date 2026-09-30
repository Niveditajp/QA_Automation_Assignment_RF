import { test, expect } from '../fixtures/saucedemo';

test.describe('Sorting', () => {
  // Comparing with the minimum value validates the outcome, not just the
  // selected dropdown option.
  test('sorting by price low to high shows the cheapest item first', async ({
    loggedInProducts,
  }) => {
    await loggedInProducts.sortBy('Price (low to high)');

    const prices = await loggedInProducts.getAllPrices();
    expect(prices.length).toBeGreaterThan(0);
    expect(prices[0]).toBe(Math.min(...prices));
  });
});