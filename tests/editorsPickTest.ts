import { chromium } from 'playwright-extra';
import { LoginPage } from '../src/pageFactory/LoginPage';  // Adjust path based on your file structure
import { EditorsPickPage } from '../src/pageFactory/EditorsPickPage';

(async () => {
    // Launch browser with context
    const browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
    const context = await browser.newContext({ viewport: null });
    const page = await context.newPage();

    // Create an instance of the LoginPage class
    const loginPage = new LoginPage(page);
    // Create an instance of the EditorPickPage class
    const editorPickPage = new EditorsPickPage(page);


    // Navigate to the login page and perform login
    await loginPage.navigate();
    await loginPage.login('aravindhan.annamalai.1@gmail.com', 'Dhruvan2023@');

     //Navigate to Editor's Pick page
     await editorPickPage.navigateToEditorsPick();

     //Verify the title of the page
     await editorPickPage.verifyEditorsPickTitle();

     await editorPickPage.editorsPickSaveStoryAndVerify();

    // Close the browser
    await browser.close();

})();