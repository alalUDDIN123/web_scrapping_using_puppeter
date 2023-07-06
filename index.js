const puppeteer = require('puppeteer');
const fs = require('fs');

async function getImageLinks() {
  const browser = await puppeteer.launch({headless:'new'});
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

  // Save image links to a JSON file
  fs.writeFile('imageLinks.json', JSON.stringify(imageLinks, null, 2), err => {
    if (err) throw err;
    console.log('Image links saved to imageLinks.json');
  });

  await browser.close();
}

getImageLinks();

  // git push origin get_images_link