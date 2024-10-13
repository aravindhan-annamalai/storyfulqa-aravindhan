Greetings!!
This is a Plawright Type script framework for newswire.storyful.com web application. It's built on Playwright, a powerful browser automation library, and TypeScript, a statically typed superset of JavaScript, offering a robust and efficient environment for end-to-end testing.

This is very basic POM framework. Due to time constraints, i wasnt able to create sepearte classes for web utilites, reports, or multiple devices. 

## Prerequisites
Before you begin, there are some essential requirements you must meet. Ensure you have the following software installed on your machine:
- npm (v8.0.0 or later): Package manager for JavaScript, used to install and manage software packages.
To verify your current version, use the command npm -v. To upgrade to the latest version, please follow the document here.
If npm isn't installed, follow the npm installation guide.
- Node.js (v18.0.0 or later): JavaScript runtime built on Chrome's V8 JavaScript engine, allowing the execution of JavaScript server-side.
- Visual Studio Code: A standalone source code editor that runs on Windows, macOS, and Linux.
Download Visual Studio Code suitable for your operating system from the title link provided.
For Visual Studio Code shortcuts, please visit Windows and macOS documents.
### Visual Studio Code Extensions:
- Prettier - Code formatter: A VSCode extension for consistent code formatting. Install it directly from the title link provided.
- Playwright Test for VSCode: A VSCode extension that integrates Playwright testing framework, enabling writing, running, and debugging end-to-end tests directly within VSCode. Install it directly from the title link provided.
- For detailed information on executing tests with this extension, please visit executing tests with Playwright Test for VSCode documentation.
- Visual Studio Code Settings: To ensure consistency with the prettier format settings, apply the following configurations in your VSCode settings (to access the settings window, use Cmd+, for Mac and Ctrl+, for Windows):
- Quote Style: Set typescript.preferences.quoteStyle to single for consistent quote usage across your code.
- Format On Save: Enable Format On Save Mode and set it to file. This ensures your code is automatically formatted every time you save, enhancing readability and consistency.

## Installation
Follow these steps to install the project, either using the command line or manually.
> [!IMPORTANT]
> Clone this git repo to your local machine

### CLI Installation
This method simplifies setup by automatically installing dependencies, Playwright browsers, the Winston logger, and a Husky pre-commit hook, which are essential for starting your project. Initializing the project also creates a new Git repository if neither the current nor parent directory is a Git repository.

The installation steps are below:

1. Install Node.js
Node.js installation can be done directly from the website or through CLI. Find the Node.js installation steps here.
2. Install Playwright using command(please use typescript when installing playwright as the test cases are written in typescript)
```
npm init playwright@latest
```
3. Install Playwright pugin
```
npm install playwright playwright-extra
```
4. Install ts-node locally or globally
locally
```
npm install -D ts-node
```
globally
```
npm install -g ts-node
```
## Usage
### Page Object
Page objects are utilized to encapsulate information about the elements present on each page of your application. They also provide a structured way to write action and assertion functions for various functionalities on each page. This approach promotes code reusability and makes the tests easier to maintain and understand. Page objects can be found in the pages directory.
Here's an example of a page object under the pages package:
### Utilities
For now the only the page utilites are designing, these utilities can be reused across different pages. Other utilites scope include Web actions, locators utilities, browser utilities etc.,

### Running Tests
Test cases can be run either via the command line or directly from the Visual Studio Code terminal.

> [Note:]
> At the moment, the test cases are executed as TypeScript files only, due to manual CAPTCHA solving.
> Since manually solved CAPTCHAs cannot be fully automated, these test cases must be run manually.

Run test cases using the commands below. Each file name represents a page under test:
```
npx test:editors-pick
npx test:home-page
npx test:login-page
npx test:top-stories
```

### Additional Playwright Features
- UI Mode: Playwright's UI mode allows you to explore, run, and debug tests in a watch mode. Dive deeper into this feature [here](https://playwright.dev/docs/test-ui-mode).

- Test Generator: With Playwright, you can automatically generate tests. It inspects the page to determine the optimal locator, prioritizing by role, text, and test ID locators. Learn more about test generation using Codegen [here](https://playwright.dev/docs/codegen).

- Trace Viewer: The Playwright Trace Viewer offers a graphical interface to review recorded traces post-execution. Get more details [here](https://playwright.dev/docs/trace-viewer).
