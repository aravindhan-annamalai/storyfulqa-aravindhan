import { test, expect } from '@playwright/test';
import { chromium } from 'playwright-extra';

test.describe('Storyful Sign-In Test', () => {

  test('should sign in and verify the title', async ({ page }) => {
    // Launch browser
    const browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
    const context = await browser.newContext({ viewport: null });
    const testPage = await context.newPage();

    // Navigate to the Storyful sign-in page
    await testPage.goto('https://signin.storyful.com/users/sign_in');

    // Fill in the email and password fields
    await testPage.fill('input#user_email', 'aravindhan.annamalai.1@gmail.com');
    await testPage.fill('input#user_password', 'Dhruvan2023@');

    console.log("Please solve the reCAPTCHA manually. Timeout for captcha is 120 seconds.");
    await page.waitForTimeout(29000); // Wait for 60 seconds to solve the CAPTCHA


    // Press Enter to submit the form
    await testPage.click('#send');

    // Wait for the page to fully load
    await testPage.waitForLoadState('networkidle');

    // Accept cookie banner after signing in
    await testPage.click('#hs-eu-confirmation-button');

    // Verify page title after sign-in
    const title = await testPage.title();
    console.log('Page title is:', title);

    // Assert that the title is correct
    expect(title).toBe('Home | Newswire by Storyful');

    // Close the browser
    await browser.close();
  });
});
