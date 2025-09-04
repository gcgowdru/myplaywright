import { test, expect } from '@playwright/test';

test('Get total number of links', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  console.log("Page loaded successfully");

  const links = page.locator('#content a');
  const noOfLinks = await links.count();
  console.log(`Total number of links: ${noOfLinks}`);
});
