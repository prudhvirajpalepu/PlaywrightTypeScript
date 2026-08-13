import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Buy Grocery');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Go For a Walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Take Rest');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Work');
  await page.getByTestId('text-input').press('Enter');
  await page.getByText('Buy Grocery').click();
  await page.getByRole('listitem').filter({ hasText: 'Buy Grocery' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Go For a Walk' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByTestId('todo-list').getByText('Work')).toBeVisible();
  await expect(page.getByText('Take Rest')).toBeVisible();
  await expect(page.getByTestId('todo-list')).toContainText('Take Rest');
});