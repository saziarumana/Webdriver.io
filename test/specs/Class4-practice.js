describe("", ()=>{

    it("Tab switching", async ()=>{

// Land on the page 
await browser.url("https://demoqa.com/links")
await browser.pause(3000);
// grab the link 
const linkforNewTab = await $('#simpleLink'); //catch by id 
// const linkforNewTab = await $('a[href="https://demoqa.com"]');  catch by a 
await linkforNewTab.click();
await browser.pause(3000);
// switch to new tab/window
const totalTabs = await browser.getWindowHandles()
// const currentTab1 = browser.getWindowHandle() -- to get single window/tab 
console.log("total tabs", totalTabs.length)
await browser.pause(3000);
await browser.switchToWindow(totalTabs[1])
const currentTab = await browser.getUrl()
console.log("current tab ==", currentTab)
await browser.closeWindow()
//back to mothertab after closing other tab
await browser.switchToWindow(totalTabs[0])
const currentTab1 = await browser.getUrl()
console.log("current tab ==", currentTab1)
await browser.pause(3000);



// click on the link 

// switch to new tab/window cle

// get the new tab/URL 

// close the new tab 

//  back to the mother tab/window 

it("Alert practice", async()=>{
    // Alert= warning/guide message/error 
    // yes/no /accept, cancel alert
    // pompt '...' 
    await browser.url("https://demoqa.com/alerts")
    await browser.pause(3000)
    const normalAlert = await $('#confirmButton')
    await normalAlert.click()
    await browser.pause(3000)
    //check alert message 
    const alertText = await browser.getAlertText()
    console.log ("Alert text ============= ", alertText)
    //click on accept button
    await browser.acceptAlert() 
    await browser.pause(3000)
    await normalAlert.click()
    await browser.pause(2000)
    //click on cancel button
    await browser.dismissAlert()
    await browser.pause(2000)


})



    })
})