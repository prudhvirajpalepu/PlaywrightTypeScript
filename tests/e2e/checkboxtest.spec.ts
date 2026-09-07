import {test,expect} from '@playwright/test'

test.describe('Checkbox tests', () => {

    test.beforeEach('to launch browser', async({page}) => {
    await page.goto("https://www.sreenidhirajakrishnan.com/practice#section-1");
    await expect(page).toHaveURL(/.*practice.*/);
    });
   

test('verify user is able to click on select all', async({page}) => {
  const selectAllCheckbox = page.getByTestId("select-all");
        // 1. Select the checkbox (using .check() is best practice)
        await selectAllCheckbox.check();
        // 2. Read the boolean state of the checkbox
        const isCheckboxSelected = await selectAllCheckbox.isChecked();
        // 3. Assert that the boolean returned is true
        expect(isCheckboxSelected).toBeTruthy(); 
        // Note: Notice there is no 'await' in front of expect here, 
        // because isCheckboxSelected is already a resolved boolean value, not a locator.
});

test('verify user is able to select individual checkboxes', async({page}) => {
    await page.getByTestId("check-a").check();
    await expect(page.getByTestId("check-a")).toBeChecked();

});

//Radio Button
test('verify user is able to select radio button', async({page}) => {
    await page.getByTestId("radio-1").check();
    await expect(page.getByTestId("radio-1")).toBeChecked();
    await expect(page.getByTestId("radio-result")).toHaveText("Selected: one");


});

});