const puppeteer = require('puppeteer');
const fs = require('fs');

async function saveTextContentToFile(url, selector, filePath) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Navigate to the specified URL
  await page.goto(url);

  // Wait for the elements to be available in the DOM
  await page.waitForSelector(selector);

  // Get the text content of the elements
  const textContents = await page.$$eval(selector, (elements) =>
    elements.map((element) => element.textContent)
  );

  // Save the text contents to a file with each content on a new line
  fs.writeFileSync(filePath, textContents.join('\n'), 'utf-8');

  await browser.close();
}

// Usage example
const url = 'https://example.cypress.io/todo';
const elementSelector = '.todo-list li'; // Assuming each todo item is wrapped in an <li> element
const filePath = 'todo.txt';

saveTextContentToFile(url, elementSelector, filePath)
  .then(() => console.log(`Text contents saved to ${filePath} successfully!`))
  .catch((error) => console.error('Error while saving the text contents:', error));


  // git push origin read_text_content