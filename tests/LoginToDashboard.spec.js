const { test, expect } = require('@playwright/test');

test('Automate login and verify dashboard', async ({ page }) => {
  await page.goto('https://dashboard.kommunicate.io/loginv2?referrer=/');

  await page.fill('input[name="email"]', 'pooja+prod2@kommunicate.io'); // 🔁 replace
  await page.fill('input[type="password"]', 'Pooja@123');       // 🔁 replace

  await page.click('button[id="login-button"]');

  await page.waitForURL('https://dashboard.kommunicate.io/dashboard/conversation-overview', { timeout: 10000 });

  await page.locator('//div[@data-testid="conversations-tab" and contains(text(), "Conversations")]')
,{timeout: 20000 };

  await page.screenshot({ path: 'dashboard-after-login.png', fullPage: true });

  {timeout: 10000 }

  console.log('✅ Login successful and dashboard loaded.');
});
