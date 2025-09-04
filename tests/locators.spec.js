import{test, expect} from '@playwright/test'



test("locators method",async({page})=>{

    await page.goto('https://demoblaze.com/');
    const pageTitle= await page.title(); //return the page title
    await console.log("Page Title" +  pageTitle);   


   await page.locator('id=login2').click(); //This is from playwright function

    //to click the login usig other method
   // page.click('id=login2'); //This is coming from the JAVASCRIPT

//await page.locator([id="loginusername"]).fill("pavanol"); //CSS format

await page.fill('[id="loginusername"]',"pavanol"); //first paramerter, accepts locator, testdata
await page.locator('#loginpassword').fill('test@123');
await page.click("//button[normalize-space()='Log in']");





})