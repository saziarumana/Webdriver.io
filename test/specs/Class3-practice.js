describe("Practice on Heroku app on actions", () => {

    it("Should land on Heroku button page", async () => {
        await browser.url("https://the-internet.herokuapp.com/add_remove_elements/")
        await browser.pause((3000))

    })

    it("Should get the add button element", async () => {

        //get element by attribute - '$' is to get one element & $$ for multiple element 
        //const addButton = $("button[onclick='addElement()']")
        //Or get element by text
        const addButtonWithText = await $('button=Add Element')
        //await addButtonWithText.click();
        //to double click
        await addButtonWithText.doubleClick();
        //to right click on a button 
        await addButtonWithText.click({ button: 'right' });
        await browser.pause(3000)

    })


    it("Should go to the page and select all the text", async () => {
        await browser.url("https://play1.automationcamp.ir/keyboard_events.html")
        await browser.pause(3000)
        //const textArea = await $('#area')
        //textArea.click()
        //to click ctrl+a, it will select all the text
        await browser.keys(['Control', a])
        await browser.pause(2000)
    })


    it("Should go to the page and select all the text area box to write", async () => {
        await browser.url("https://play1.automationcamp.ir/keyboard_events.html")
        await browser.pause(3000)
        //get element by id so # needed
        const textArea = await $('#area')
        textArea.click()
        //to click ctrl, to select the place 
        await browser.keys(['Control'])
        await browser.pause(2000)
    })


    it("Should go to the page and scroll the page", async () => {
        await Browser.url("https://demoqa.com/elements")
        await browser.pause(3000)
        //class has multiple elements so $$ and last element is 5 index so [5]
        const bookApplicationBtns = await $$('//span[@class="pr-1"]')[5]
        //will catch the element and sroll it down and view korabe
        await bookApplicationBtns.scrollIntoView()
        await browser.pause(3000)

    })


})
