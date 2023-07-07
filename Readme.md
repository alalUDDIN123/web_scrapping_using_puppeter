# Puppeteer Query Selectors

Puppeteer provides several methods for selecting elements within the DOM of a web page. Here are some commonly used query selectors:

### 1. Selecting by ID

You can use the `page.$` method to select an element by its ID attribute.

```javascript
const element = await page.$('#myElementId');
```

### 2. Selecting by Class Name

To select elements by their class name, you can use the `page.$$` method.

```javascript
const elements = await page.$$('.myClassName');
```

### 3. Selecting by CSS Selector

Puppeteer supports CSS selectors using the `page.$` and `page.$$` methods.

```javascript
const element = await page.$('div.container > p');
const elements = await page.$$('ul#menu > li');
```

### 4. Selecting by XPath

You can also use XPath expressions to select elements using the `page.$x` method.

```javascript
const [element] = await page.$x('//div[@class="myClassName"]');
```

### 5. Selecting by Attribute

To select elements based on their attributes, you can use attribute selectors with the `page.$$` method.

```javascript
const elements = await page.$$('[data-category="books"]');
```

### 6. Combining Selectors

Puppeteer allows you to combine selectors to create more specific queries.

```javascript
const element = await page.$('div.container > p.myClassName');
```

### 7. Selecting Multiple Tags

To select multiple elements of different tags, you can use the `page.$$` method with a comma-separated list of selectors.

```javascript
const elements = await page.$$('li, a');
```

In the example above, `page.$$` selects all `<li>` and `<a>` elements on the page and returns them as an array.



```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Selecting by ID
  const elementById = await page.$('#myElementId');

  // Selecting by Class Name
  const elementsByClassName = await page.$$('.myClassName');

  // Selecting by CSS Selector
  const elementByCssSelector = await page.$('div.container > p');
  const elementsByCssSelector = await page.$$('ul#menu > li');

  // Selecting by XPath
  const [elementByXPath] = await page.$x('//div[@class="myClassName"]');

  // Selecting by Attribute
  const elementsByAttribute = await page.$$('[data-category="books"]');

  // Combining Selectors
  const elementByCombinedSelectors = await page.$('div.container > p.myClassName');

  // Selecting Multiple Tags
  const elementsByMultipleTags = await page.$$('li, a');

  // Use the selected elements in your desired operations

  await browser.close();
})();

```
---
`git push origin query_selectors`

