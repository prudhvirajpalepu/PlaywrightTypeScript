# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.Spec.ts >> invalid login test
- Location: tests\e2e\Login.Spec.ts:19:5

# Error details

```
TypeError: loginPage.gotoLoginPage is not a function
```

# Test source

```ts
  1  | import {expect, test} from '@playwright/test'
  2  | import { LoginPage } from '../../playwright/pages/LoginPage'
  3  | import loginData from '../../playwright/test-data/loginData.json'
  4  | 
  5  | test('valid login test', async ({ page }) => {
  6  |     const loginPage = new LoginPage(page);
  7  |     await loginPage.goto();
  8  |     // await loginPage.login('standard_user', 'secret_sauce');
  9  |     await loginPage.login(
  10 |         loginData.valid_user.username,
  11 |         loginData.valid_user.password
  12 |     );
  13 | 
  14 |      // await loginPage.verifyLoginSuccess();
  15 |     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  16 | 
  17 | });
  18 | 
  19 | test('invalid login test', async ({ page }) => {
  20 | 
  21 |     const loginPage = new LoginPage(page);
  22 | 
> 23 |     await loginPage.gotoLoginPage();
     |                     ^ TypeError: loginPage.gotoLoginPage is not a function
  24 |     // await loginPage.login('standard_user', 'secret_sauce');
  25 |     await loginPage.login(
  26 |         loginData.invalid_user.username,
  27 |         loginData.invalid_user.password
  28 |     );
  29 | 
  30 |     await expect(loginPage.errorMessage).toBeVisible();
  31 | 
  32 | });
```