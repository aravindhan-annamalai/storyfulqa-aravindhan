import { Page } from '@playwright/test';

export class SaveStory {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Method to save the first story
    async saveFirstStoryAndVerify() {
        // Locate the story cards on the page
        const storyCards = this.page.locator('.FeedStoryCard_feed-story-card__sSLzG');
        const storyCard = storyCards.first();

        // Extract the title of the first story card
        const articleTitle = await storyCard.locator('.FeedStoryCard_card-title__GZln1').textContent();
        const articleName = articleTitle?.trim() || '';

        // Extract the data-testid attribute of the story (for back button or another identifiable element)
        const articleTestId = await storyCard.locator('a[data-testid="back-button"]').getAttribute('data-testid');
        console.log("Article data-testid:", articleTestId);

        // Locate the star (Save Story) button within the first story card
        const starButton = storyCard.locator('button[aria-label="Save Story"]');

        // Get the data-testid of the star to check its state (solid or empty)
        const starTestId = await starButton.first().getAttribute('data-testid');

        // Click the star button to save the story
        await starButton.first().click();
        console.log("Saved Article Name:", articleName);

        // Wait for some time to verify the save action (optional)
        await this.page.waitForTimeout(2000);

        // Verify if the story is starred or not based on the star's `data-testid` attribute
        if (starTestId === 'solidStar') {
            console.log("The star is solid, indicating the story is saved.");
        } else if (starTestId === 'emptyStar') {
            console.log("The star is empty, indicating the story is not saved.");
        } else {
            console.log("The star state could not be determined.");
        }

            // Navigate to saved stories
        await this.page.click('.SavedStories_header-bookmark-button-link__QBLC3');
        await this.page.waitForTimeout(20000);
        
        // Verify if the saved article title is present on saved stories page
        const savedArticle = this.page.locator(`text="${articleName}"`);
        const isArticleDisplayed = await savedArticle.count() > 0;

        if (isArticleDisplayed) {
            console.log(`The article "${articleName}" is displayed on the current page.`);
        } else {
            console.log(`The article "${articleName}" is NOT displayed on the current page.`);
        }
    
    }
}
