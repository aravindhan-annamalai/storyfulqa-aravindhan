import { chromium } from 'playwright-extra';
import { LoginPage } from '../src/pageFactory/LoginPage'; 
import { SaveStory } from '../src/pageUtils/SaveStory'
import { expect } from '@playwright/test';

(async () => {
    // Launch browser with context
    const browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
    const context = await browser.newContext({ viewport: null });
    const page = await context.newPage();

    // Create an instance of the LoginPage class
    const loginPage = new LoginPage(page);
    const saveStory = new SaveStory(page);

    // Navigate to the login page and perform login
    await loginPage.navigate();
    await loginPage.login('aravindhan.annamalai.1@gmail.com', 'Dhruvan2023@');

    // Navigate to Top stories
    const topStories = page.locator('.svg-inline--fa.fa-book-sparkles');
    await topStories.click();
    
    await page.waitForTimeout(2000);
    await page.waitForLoadState('networkidle');

    const heading = page.locator('text=Most Viewed Stories:');
    const isVisible = await heading.isVisible();

    // Assert that the heading is visible on the page
    expect(isVisible).toBeTruthy();

    console.log("Verified: user navigated to Top Stories page");

    await saveStory.saveFirstStoryAndVerify();
    
    // Close the browser
    await browser.close();
})();