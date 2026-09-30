import { defineConfig, devices } from '@playwright/test';
import { config } from './config';

export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [['html', { open: 'never' }]],
  projects: [
    {
      name: 'ui',
      testDir: './tests/ui',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: config.ui.baseURL,
        // SauceDemo exposes data-test, not data-testid.
        testIdAttribute: 'data-test',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
      },
    },
    {
      name: 'api',
      testDir: './tests/api',
      use: {
        extraHTTPHeaders: {
          'x-api-key': config.api.apiKey,
        },
      },
    },
  ],
});