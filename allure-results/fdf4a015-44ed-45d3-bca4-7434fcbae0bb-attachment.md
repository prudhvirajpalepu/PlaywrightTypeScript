# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Dropdown.spec.ts >> Dropdown tests >> verify user is able to select an option from dropdown
- Location: tests\e2e\Dropdown.spec.ts:10:9

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test.describe('Dropdown tests', () => {
  4  |     tag: '@regression'
  5  |      test.beforeEach('to launch browser', async({page}) => {
> 6  |         await page.goto("https://www.sreenidhirajakrishnan.com/practice#section-1");
     |                    ^ Error: page.goto: Target page, context or browser has been closed
  7  |         await expect(page).toHaveURL(/.*practice.*/);
  8  |     });
  9  | 
  10 |     test ('verify user is able to select an option from dropdown', async({page}) => {
  11 |         tag: '@smoke'
  12 |         const dropdown = page.getByTestId("standard-select");
  13 |         await dropdown.selectOption("red");
  14 |         await expect(dropdown).toHaveValue("red");
  15 |     });
  16 | 
  17 |     test ('verify user is able to select multiple options', async({page}) => {
  18 |         tag: '@regression'
  19 |         const dropdown = page.getByTestId("multi-select");
  20 |         await dropdown.selectOption(['java', 'Python']);
  21 |         await expect(dropdown).toHaveValue("java");
  22 |     });
  23 | 
  24 |     test ('verify user is able to select an option from dynamic dropdown', async({page}) => {
  25 |         tag:'@regression'
  26 |         const dropdown = page.getByTestId("custom-dropdown-toggle");
  27 |         await dropdown.click();
  28 |         await page.locator("//*[@id='section-4']/div/div[3]/div/ul/li[2]").click();
  29 |         await expect(dropdown).toHaveText("Beta");
  30 |     });   
  31 | 
  32 |     test ('verify user is able to select an option', async({page}) => {
  33 |         tag:'@regression'
  34 |         const dropdown = page.getByTestId("dynamic-select");
  35 |         await page.getByTestId('dynamic-select').click();
  36 |         await dropdown.selectOption(['Playwright']);
  37 |         await expect(dropdown).toHaveValue("Playwright");
  38 |     });
  39 | 
  40 |     test.afterEach('close the browser', async({page}) => {
  41 |         await page.close();
  42 |     });
  43 | 
  44 | });
  45 | 
  46 | 
  47 | 
```