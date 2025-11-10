describe("Button add and delete", () => {

    it("Should add and remove button", async () => {
        await browser.url("https://the-internet.herokuapp.com/add_remove_elements/")
        await browser.pause(3000)
        const addButton = await $('button[onclick="Add Element()"]')
        await addButton.click();
        await browser.pause(3000)
        //Remove the button
        //as deleting the first button so using $ to return only one element 
        const deleteButton = await $('button.added-manually')
        await deleteButton.click();
        await browser.pause(3000)

    })
    it("Should scroll down and scroll up", async () => {

        await browser.url("https://demoqa.com/elements")
        await browser.pause(3000)
        // here, '...' is Xpath selector, // = Search anywhere in the HTML document, span = Look for elements with the tag <span>, 
        // [@class="pr-1"]= Only match those spans whose class attribute exactly equals "pr-1"
        //scroll down : 
        const bookApplicationBtns = await $$('//span[@class="pr-1"]')[5]
        await bookApplicationBtns.scrollIntoView()
        await browser.pause(3000)
        //scroll up: 
        const up = await $$('//span[@class="pr-1"]')[0]
        await up.scrollIntoView()
        await browser.pause(3000)


    })

})