# Image Link Retrieval using Puppeteer

This script utilizes Puppeteer, a Node.js library, to retrieve image links from a specified website. The image links, along with unique IDs, are then saved to a JSON file.

## How It Works

1. The script launches a headless Chromium browser instance using Puppeteer.
2. A new page is created within the browser.
3. The script navigates to the specified website URL.
4. It waits for the images on the page to finish loading.
5. Using JavaScript's DOM manipulation capabilities, the script queries all `img` elements on the page to extract the image links.
6. For each image link found, an object is created with a unique ID and the corresponding image source URL.
7. The image link objects are stored in an array.
8. The script saves the array of image link objects to a JSON file named `imageLinks.json` using the `fs.writeFile` function.
9. Finally, the browser instance is closed.

The script essentially automates the process of navigating to a website, extracting the image links, and saving them to a JSON file. By leveraging Puppeteer's capabilities, it interacts with the browser and the website's DOM to retrieve the necessary information.

`git push origin get_images_link`