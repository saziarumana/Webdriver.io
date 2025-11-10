import { $} from '@wdio/globals';
import page from './page.js';


class LoginPageForPlayAutomation {

    //get properties/elements 
    get usernameField() {
        return $("input[placeholder='Username']")
    }
    get passwordField() {
        return $("input[placeholder='Password']")
    }
    get loginButton() {
        return $("#login")
    }
 
//action/behaviour 

    async typeOnUserNameField (username){
        await this.usernameField.setValue(username)
        await browser.pause(1500)

    }
    async typeOnPasswordField (password) {
        await this.passwordField.setValue(password)

    }
    async clickOnLoginButton () {
        await this.loginButton.click()
    }
    async gotoLoginPage(){
        await browser.url("https://play1.automationcamp.ir/login.html")
    }

    // async loginPlay (username,password){
    //     await this.typeOnUserNameField(usrname)
    //     await this.typeOnPasswordField(password)
    //     await this.clickOnLoginButton()
    // }

}

export default new LoginPageForPlayAutomation();
//LoginPageForPlayAutomation - now this object can be used in other file 