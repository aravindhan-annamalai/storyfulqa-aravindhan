import { chromium } from 'playwright-extra';
import { LoginPage } from '../src/pageFactory/LoginPage';  // Adjust path based on your file structure
import { HomePage } from '../src/pageFactory/HomePage';
import { LocationFilter } from '../src/pageUtils/LocationFilter';

(async () => {
    // Launch browser with context
    const browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
    const context = await browser.newContext({ viewport: null });
    const page = await context.newPage();

    // Create an instance of the LoginPage class
    const loginPage = new LoginPage(page);
    // Create an instance of the Location Filter class
    const locationFilter =new LocationFilter(page);
    //Create and instance of the HomePageClass
    const homePage = new HomePage(page);
    // Navigate to the login page and perform login
    await loginPage.navigate();
    await loginPage.login('aravindhan.annamalai.1@gmail.com', 'Dhruvan2023@');
    //Selecting a Location and apply filter
    await locationFilter.selectLocation('Africa');
    await locationFilter.applyFilter();

    //Save first story and verify it in saved page based on filter
    await homePage.homePageSaveFirstStoryAndVerify();
       
    // Close the browser
    await browser.close();

})();