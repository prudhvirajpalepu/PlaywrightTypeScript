# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Dropdown.spec.ts >> Dropdown tests >> verify user is able to select multiple options
- Location: tests\e2e\Dropdown.spec.ts:16:9

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  getByTestId('multi-select')
Expected: "Java"
Received: "java"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for getByTestId('multi-select')
    14 × locator resolved to <select multiple id="multi-select" name="multi-select" aria-label="Multi select" data-testid="multi-select" class="input-field practice-select">…</select>
       - unexpected value "java"

```

```yaml
- listbox "Multi select":
  - option "Java" [selected]
  - option "Python" [selected]
  - option "JavaScript"
  - option "C#"
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test.describe('Dropdown tests', () => {
  4  | 
  5  |      test.beforeEach('to launch browser', async({page}) => {
  6  |         await page.goto("https://www.sreenidhirajakrishnan.com/practice#section-1");
  7  |         await expect(page).toHaveURL(/.*practice.*/);
  8  |     });
  9  | 
  10 |     test ('verify user is able to select an option from dropdown', async({page}) => {
  11 |         const dropdown = page.getByTestId("standard-select");
  12 |         await dropdown.selectOption("red");
  13 |         await expect(dropdown).toHaveValue("red");
  14 |     });
  15 | 
  16 |     test ('verify user is able to select multiple options', async({page}) => {
  17 |         const dropdown = page.getByTestId("multi-select");
  18 |         await dropdown.selectOption(['Java', 'Python']);
> 19 |         await expect(dropdown).toHaveValue("Java");
     |                                ^ Error: expect(locator).toHaveValue(expected) failed
  20 |     });
  21 | 
  22 | });
  23 | 
  24 | 
  25 | 
```