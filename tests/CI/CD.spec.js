// tests/login.spec.js
const { test, expect } = require('@playwright/test');

test('sample login test', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  await page.fill('#userName', 'testuser');
  await page.fill('#password', 'Test@123');
  await page.click('#login');
  
  // Simple assertion (for demo, will fail if login invalid)
  await expect(page.locator('#userName')).toHaveText('testuser');
});
