const { test, expect } = require('@playwright/test');

test('Launch browser, open website, and take screenshot', async ({ page }) => {
  await page.goto('https://dashboard.kommunicate.io/loginv2');

  await expect(page).toHaveTitle("Kommunicate");

  await page.screenshot({ path: 'webpagescreenshot.png', fullPage: true });

 //Print success
  console.log('Screenshot saved');
});
