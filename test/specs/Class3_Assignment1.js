describe ("Button delete",()=>{

    it("Should click on delete buttton", async ()=> {
        await browser.url ("https://the-internet.herokuapp.com/add_remove_elements/")
        await browser.pause(3000)
        const addButton = await $('button[onclick="addElement()"]');
        //need to click the button 10th times 
        for (let i=0; i<=10;i++) {
            await addButton.click();
            
        }

    const deleteButtons = await $$('button.added-manually');
       if (deleteButtons.length >= 5) {
            await deleteButtons[4].click();
            console.log('Clicked on 5th delete button');
        } else {
            throw new Error('Less than 5 delete buttons found!');
        }

        await browser.pause(2000);
    });
}); 