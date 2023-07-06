## Image Downloader

1. It imports the required modules: `puppeteer`, `fs` (File System), and `path`.

2. The `downloadImages` function is defined as an asynchronous function, allowing the use of `await` to handle asynchronous operations.

3. The script launches a headless browser using `puppeteer.launch()`, which creates an instance of the Chromium browser.

4. A new page is created with `browser.newPage()`.

5. The script navigates to the specified website URL using `page.goto()`. In this case, it visits `https://unsplash.com/`.

6. The script waits for the images to load on the page using `page.waitForSelector()`. It ensures that the `<img>` elements are present in the DOM.

7. The image links are extracted from the page using `page.evaluate()`. It uses `document.querySelectorAll('img')` to select all `<img>` elements and maps them to an array of objects containing unique IDs (`id`) and image source URLs (`src`).

8. A directory is created to store the downloaded images using `fs.mkdirSync()`. The `path.join()` function is used to construct the directory path.

9. The script loops through each image in `imageLinks`.

10. For each image, it retrieves the image source URL (`imageUrl`), unique ID (`imageId`), and desired image extension (`imageExtension`). The extension is specified as `.jpg` in this code, but you can change it to your desired extension.

11. The script downloads the image by sending a GET request to the `imageUrl` using `page.goto()`. The response is captured using `response.buffer()` to obtain the image data as a buffer.

12. The downloaded image data is then saved to a file using `fs.writeFileSync()`. The file path is constructed using `path.join()` and includes the directory path, image ID, and image extension.

13. After downloading and saving all the images, the browser instance is closed using `browser.close()`.

14. Finally, a success message is logged to the console using `console.log()`.

To execute the code, call the `downloadImages()` function. It will launch the browser, navigate to the website, download the images, save them locally, and display a success message.

Note: Make sure to have Puppeteer and its dependencies installed in your project. You can install it via npm with the command: `npm install puppeteer`.
---
`git push origin get_images_and_download`