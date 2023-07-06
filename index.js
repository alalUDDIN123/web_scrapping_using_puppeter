const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function downloadImages() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Navigate to the website
  await page.goto('https://unsplash.com/');

  // Wait for images to load
  await page.waitForSelector('img');

  // Extract image links with unique IDs
  const imageLinks = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('img'));
    return links.map((link, index) => ({
      id: `image${index + 1}`,
      src: link.src
    }));
  });

  // Create a directory to save the images
  const directoryPath = path.join(__dirname, 'images');
  fs.mkdirSync(directoryPath, { recursive: true });

  // Download and save each image
  for (const image of imageLinks) {
    const imageUrl = image.src;
    const imageId = image.id;
    const imageExtension = '.jpg'; // Specify the desired extension here
    const imagePath = path.join(directoryPath, `${imageId}${imageExtension}`);

    const response = await page.goto(imageUrl);
    const buffer = await response.buffer();
    fs.writeFileSync(imagePath, buffer);
  }

  await browser.close();
  console.log('Images downloaded and saved successfully!');
}

downloadImages();
