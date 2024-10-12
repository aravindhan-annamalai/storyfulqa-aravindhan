import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private emailSelector = 'input#user_email';
    private passwordSelector = 'input#user_password';
    private loginButtonSelector = 'input#user_password';
    private recaptchaMessage = 'Please solve the reCAPTCHA manually, then press Enter in the console.';
    private cookieBannerSelector = '#hs-eu-confirmation-button';

    constructor(page: Page) {
        this.page = page;
    }

    // Method to navigate to the login page
    async navigate() {
        await this.page.goto('https://signin.storyful.com/?client_id=OXMXzglpxkdOMzfMms1-CtQPH5I');
    }

    // Method to perform login
    async login(email: string, password: string) {
        await this.page.fill(this.emailSelector, email);
        await this.page.fill(this.passwordSelector, password);

        console.log(this.recaptchaMessage);
        await new Promise<void>((resolve) => {
            process.stdin.once('data', () => {
                resolve();
            });
        });

        await this.page.press(this.loginButtonSelector, 'Enter');
        await this.page.waitForLoadState('networkidle');

        // Handle cookie banner
        await this.page.click(this.cookieBannerSelector);
    }

    // Method to verify the page title after login
    async verifyLogin() {
        const title = await this.page.title();
        console.log("Page title is:", title);
        return title;
    }
}
