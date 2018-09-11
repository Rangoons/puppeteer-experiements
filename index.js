const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://www.supremenewyork.com/shop/all/hats');
  const inputElement = await page.$('a.name-link');
  await inputElement.click();

  const addToCart = await page.$('#add-remove-buttons > input');
  await addToCart.click().then(async () => {
    const checkout = await page.$('a.checkout');
    await checkout.click();
  });

  setTimeout(async () => {
    await browser.close();
  }, 5000);
})();
