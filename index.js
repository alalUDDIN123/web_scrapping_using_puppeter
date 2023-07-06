
const puppeteer = require('puppeteer');

async function takeScreenshot(url, outputPath) {
  const browser = await puppeteer.launch({ headless: "new" }); // Launch a new instance of the Puppeteer browser
  const page = await browser.newPage(); // Open a new tab in the browser
  await page.setViewport({ width: 1080, height: 1280 }); // Set the viewport size for the page
  await page.goto(url); // Navigate to the specified URL
  await page.screenshot({ path: outputPath }); // Take a screenshot and save it to the specified output path

  await browser.close(); // Close the browser instance once the screenshot is taken
}

// Usage example
const webpageUrl = 'https://sass-lang.com/guide/'; // Example URL to capture
const screenshotPath = 'screenshot.png'; // Name of the screenshot file

takeScreenshot(webpageUrl, screenshotPath) // Call the function to take a screenshot
  .then(() => console.log('Screenshot taken successfully!'))
  .catch((error) => console.error('Error while taking a screenshot:', error));


  // git push origin take_screenshot