import { expect, Page } from '@playwright/test';

export class LocationFilter {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Method to select a location filter
    async selectLocation(location: string) {
        // Select Filter from location
        const locationButton = await this.page.waitForSelector('button:has-text("Location")', { state: 'visible' });
        await locationButton.click();

        const dropDownOption = await this.page.waitForSelector(`text=Africa`);
        await dropDownOption.click();

        // Wait a bit to see changes
        await this.page.waitForTimeout(2000);

        // Check if the option has the active class
        const hasActiveClass = await dropDownOption.evaluate(button => button.classList.contains('LocationFilter_pill--active__C6iNg'));

        if (hasActiveClass) {
            console.log("Button is selected");
        } else {
            console.error("Error: Button is not selected");
        }

        // Assert that the button has the active class, indicating it is selected
        expect(hasActiveClass).toBe(true);
    }

    async applyFilter(){
        const applyButton = await this.page.waitForSelector('aria-label="apply"', {state: 'visible'});
        applyButton.click();
    }

    async clearFilter(){
        const clearButton = await this.page.waitForSelector('.Button_button__OFOdO Button_button--text__HCI9J', {state: 'visible'});
    }
}
