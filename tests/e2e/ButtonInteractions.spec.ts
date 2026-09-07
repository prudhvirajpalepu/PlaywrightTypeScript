import {test, expect} from '@playwright/test';
test.describe('button interactions', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.sreenidhirajakrishnan.com/practice#section-1");
        // Verify that the page has loaded correctly by checking the URL
        await expect(page).toHaveURL(/.*practice.*/);
    });

    test('single click on button', async ({ page }) => {
        await page.getByTestId("single-click-btn").click();
        await expect(page.getByText("Single Clicked!")).toBeVisible();
    });

    test('double click on button', async ({ page }) => {
        await page.getByTestId("double-click-btn").dblclick();
        await expect(page.getByText("Double Clicked!")).toBeVisible();
    }); 

    test('right click on button', async ({ page }) => {
        await page.getByTestId("right-click-btn").click({button: "right"});
        await expect(page.getByText("Right click captured (context menu blocked)")).toBeVisible();
    });

    test('disabled button is not clickable', async ({ page }) => {
        const disabledButton = page.getByTestId("disabled-btn");
        await expect(disabledButton).toBeDisabled();
        await expect(disabledButton).not.toBeEnabled();
    });

    test('verify delayed button becomes enabled', async ({ page }) => {
    // 1. Locate both buttons
    const triggerButton = page.getByTestId("start-delay-btn");
    const delayedButton = page.getByTestId("delayed-enable-btn");

    // 2. Ensure the second button is disabled initially (optional but good practice)
    await expect(delayedButton).toBeDisabled();

    // 3. Click the first button
    await triggerButton.click();

    // 4. Assert the second button becomes enabled.
    // We override the timeout to 7000ms (7 seconds) to safely buffer the 4-second delay.
    await expect(delayedButton).toBeEnabled({ timeout: 7000 });
});


});