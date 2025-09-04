import {test, expect} from '@playwright/test';

test('Test name', async({page})=>{
  await page.goto("https://google.com");
  const pageTitle= page.title();
  await expect(page).toHaveTitle("Google");
  await expect(page).toHaveURL("https://www.google.com/?zx=1756994255410&no_sw_cr=1");
  await page.close();


})



