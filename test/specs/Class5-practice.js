import LoginPageForPlayAutomation from '../pageobjects/login.page.test.js';


describe ('Login Page test', ()=> {

    it ("Should login with valid credentials", async()=> {
      
        await LoginPageForPlayAutomation.gotoLoginPage()
        await browser.pause(3000)
        await LoginPageForPlayAutomation.typeOnUserNameField("admin")
        await browser.pause(3000)
        await LoginPageForPlayAutomation.typeOnPasswordField("admin")
        await LoginPageForPlayAutomation.clickOnLoginButton()
        
       // Or-- await LoginPageForPlayAutomation.loginPlay("admin","admin")
    })

    it("Should login with valid username & invalid password", async ()=> {

        await LoginPageForPlayAutomation.gotoLoginPage()
        await browser.pause(3000)
        await LoginPageForPlayAutomation.typeOnUserNameField("admin")
        await browser.pause(3000)
        await LoginPageForPlayAutomation.typeOnPasswordField("min")
        await LoginPageForPlayAutomation.clickOnLoginButton()


    })

    it("Should login with invalid username & invalid password", async ()=> {
        
        await LoginPageForPlayAutomation.gotoLoginPage()
        await browser.pause(3000)
        await LoginPageForPlayAutomation.typeOnUserNameField("adin")
        await browser.pause(3000)
        await LoginPageForPlayAutomation.typeOnPasswordField("min")
        await LoginPageForPlayAutomation.clickOnLoginButton()
        

    })
     it("Should login with empty username & password", async ()=> {
        
        await LoginPageForPlayAutomation.gotoLoginPage()
        await browser.pause(3000)
        await LoginPageForPlayAutomation.typeOnUserNameField("")
        await browser.pause(3000)
        await LoginPageForPlayAutomation.typeOnPasswordField("")
        await LoginPageForPlayAutomation.clickOnLoginButton()
        

    })
    


})