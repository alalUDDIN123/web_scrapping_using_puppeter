# Screenshot taking utility using `Puppeteer`

This readme provides an overview and usage instructions for the code snippet provided, which uses Puppeteer to capture a screenshot of a web page.

## Dependencies

This code snippet requires the following dependency:

- [Puppeteer](https://www.npmjs.com/package/puppeteer): A Node.js library that provides a high-level API to control a headless Chrome or Chromium browser.

You can install the required dependencies using npm:

```bash
npm install puppeteer
```

## Usage

To use the `takeScreenshot` function, follow these steps:

1. Import the required module:

   ```javascript
   const puppeteer = require('puppeteer');
   ```

2. Define the `takeScreenshot` function:

   ```javascript
   async function takeScreenshot(url, outputPath) {
     const browser = await puppeteer.launch({ headless: "new" }); // Launch the server
     const page = await browser.newPage(); // Open a new tab
     
     await page.goto(url); // Go to the specified URL
     await page.screenshot({ path: outputPath }); // Take a screenshot
     
     await browser.close(); // Close the browser once the screenshot is taken
   }
   ```

3. Set the webpage URL and the path where you want to save the screenshot:

   ```javascript
   const webpageUrl = 'https://example.com'; // Replace with the desired URL
   const screenshotPath = 'screenshot.png'; // Replace with the desired screenshot name and path
   ```

4. Call the `takeScreenshot` function:

   ```javascript
   takeScreenshot(webpageUrl, screenshotPath)
     .then(() => console.log('Screenshot taken successfully!'))
     .catch((error) => console.error('Error while taking screenshot:', error));
   ```

   The function returns a promise that resolves when the screenshot is taken successfully. You can handle the success and error cases accordingly.

Make sure you have the necessary permissions to write to the specified output path.

Note: The `headless` option in `puppeteer.launch` is set to `"new"`, which means the browser will be launched in headless mode. You can modify this option as per your requirements.

