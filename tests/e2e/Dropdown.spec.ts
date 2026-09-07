import {test, expect} from '@playwright/test'

test.describe('Dropdown tests', () => {
    tag: '@regression'
     test.beforeEach('to launch browser', async({page}) => {
        await page.goto("https://www.sreenidhirajakrishnan.com/practice#section-1");
        await expect(page).toHaveURL(/.*practice.*/);
    });

    test ('verify user is able to select an option from dropdown', async({page}) => {
        tag: '@smoke'
        const dropdown = page.getByTestId("standard-select");
        await dropdown.selectOption("red");
        await expect(dropdown).toHaveValue("red");
    });

    test ('verify user is able to select multiple options', async({page}) => {
        tag: '@regression'
        const dropdown = page.getByTestId("multi-select");
        await dropdown.selectOption(['java', 'Python']);
        await expect(dropdown).toHaveValue("java");
    });

    test ('verify user is able to select an option from dynamic dropdown', async({page}) => {
        tag:'@regression'
        const dropdown = page.getByTestId("custom-dropdown-toggle");
        await dropdown.click();
        await page.locator("//*[@id='section-4']/div/div[3]/div/ul/li[2]").click();
        await expect(dropdown).toHaveText("Beta");
    });   

    test ('verify user is able to select an option', async({page}) => {
        tag:'@regression'
        const dropdown = page.getByTestId("dynamic-select");
        await page.getByTestId('dynamic-select').click();
        await dropdown.selectOption(['Playwright']);
        await expect(dropdown).toHaveValue("Playwright");
    });

    test.afterEach('close the browser', async({page}) => {
        await page.close();
    });

});


