const puppeteer = require('puppeteer');

async function takeScreenshot(url, outputPath) {
  const browser = await puppeteer.launch({headless:"new"}); // luanch the server
  const page = await browser.newPage(); // open a new tab
  
  await page.goto(url); // go to browser according to passing parameter
  await page.screenshot({ path: outputPath }); // take screenshot
  
  await browser.close(); //close the borwser once taken screenshot
}

// Usage example
const webpageUrl ='https://course.masaischool.com/lectures/64915'; // example url
const screenshotPath = 'screenshot.png'; // name of the screenshot

takeScreenshot(webpageUrl, screenshotPath) // calling function
  .then(() => console.log('Screenshot taken successfully!'))
  .catch((error) => console.error('Error while taking screenshot:', error));
