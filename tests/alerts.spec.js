/*
>> By default dialogs/Alerts are auto dismissed in playwright

3 alerts
1. alert()
2.Confirm()
3. 
TESTING CI CD
*/

import{test,expect} from "@playwright/test"

test('dialog',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    



})