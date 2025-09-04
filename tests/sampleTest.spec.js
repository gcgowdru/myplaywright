import {test, expect} from '@playwright/test'

//What is page --is window, tab

//page as object
test('myfirstScript',async ({page})=>{

    await page.goto('https://demoblaze.com/')//this naviage URL
    const pageTitle=page.title(); //return the page title
    await console.log("Page Title"+pageTitle);









})