const puppeteer = require('puppeteer');

async function querySelectors(url) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(url);

  // Wait for the anchor tags to be present
  await page.waitForSelector('div.navbar__items>a');

  // Finding elements using CSS selectors
  const h1Element_Inside_div = await page.$('div.theme-doc-markdown markdown h1');
  const h1Text = await page.evaluate(element => element.textContent, h1Element_Inside_div);

  console.log("h1Text:-", h1Text);

  const anchorTags = await page.$$('div.navbar__items>a');


  if (anchorTags.length > 0) {
    const all_anchor_text = await Promise.all(anchorTags.map(element => page.evaluate(el => el.textContent, element)));
    console.log(all_anchor_text);
  } else {
    console.log("No matching anchor tags found.");
  }

  await browser.close();
}

let goToURL = 'https://pptr.dev/guides/query-selectors';
querySelectors(goToURL);
