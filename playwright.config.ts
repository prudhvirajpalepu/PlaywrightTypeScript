import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  retries: 1,

  use: {
    headless: true,
    baseURL: 'https://playwright.dev',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  reporter: [['html'], ['list']],
});