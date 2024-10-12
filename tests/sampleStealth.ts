import { chromium } from 'playwright-extra';
import RecaptchaPlugin from '@extra/recaptcha';

// Add Recaptcha plugin to Playwright
chromium.use(
    RecaptchaPlugin({
        provider: { id: '2captcha', token: 'OXMXzglpxkdOMzfMms1-CtQPH5I' },
        visualFeedback: true
    }) as any // Type assertion to bypass the type check
);

(async () => {
    // Launch browser with context
    const browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
    const context = await browser.newContext({ viewport: null });
    const page = await context.newPage();

    // Navigate to the Storyful sign-in page
    await page.goto('https://signin.storyful.com/users/sign_in');

    // Fill in the email and password fields
    await page.fill('input#user_email', 'aravindhan.annamalai.1@gmail.com');
    await page.fill('input#user_password', 'Dhruvan2023@');

    // Solve the reCAPTCHA using the plugin
    const { captchas, solutions, solved } = await page.solveRecaptchas();
    if (solved.length > 0) {
        console.log('CAPTCHA solved successfully.');
    } else {
        console.log('CAPTCHA could not be solved. Please try again.');
        return;
    }

    // Submit the login form
    await page.press('input#user_password', 'Enter');

    // Wait for login confirmation
    try {
        await page.waitForSelector('selector-for-dashboard-or-logout', { timeout: 10000 });
    } catch {
        console.error('Login failed or dashboard element not found.');
        await browser.close();
        return;
    }

    // Wait for the page to load completely before checking the title
    await page.waitForLoadState('load');

    // Verify page title after sign-in
    const title = await page.title();
    console.log("Page title is:", title);

    // Assert page title
    if (title !== '(1) Home | Newswire by Storyful') {
        console.error('Unexpected page title:', title);
    }

    // Close the browser
    await browser.close();
})();
