import { chromium } from 'playwright-extra';
import { LoginPage } from '../src/pageFactory/LoginPage';  // Adjust path based on your file structure
import { expect } from '@playwright/test';

(async () => {
    // Launch browser with context
    const browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
    const context = await browser.newContext({ viewport: null });
    const page = await context.newPage();

    // Create an instance of the LoginPage class
    const loginPage = new LoginPage(page);

    // Navigate to the login page and perform login
    await loginPage.navigate();
    await loginPage.login('aravindhan.annamalai.1@gmail.com', 'Dhruvan2023@');

    // Verify login
    const title = await loginPage.verifyLogin();
    expect(title).toBe('Home | Newswire by Storyful');

    // Close the browser
    await browser.close();
})();
