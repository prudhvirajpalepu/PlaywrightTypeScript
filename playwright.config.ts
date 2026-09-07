import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: false,
  retries: 0,
  workers: undefined,               // Auto workers

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright'],
  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
/* configure projects for major environments 
  projects: [
    {
      name: 'DEV',
      use: { baseURL: 'https://dev.example.com', ...devices['Desktop Chrome'] },
    },
    {
      name: 'QA',
      use: { baseURL: 'https://qa.example.com', ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ], */

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

});

