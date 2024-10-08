const { expect, $ } = require('@wdio/globals')

class LoginPage {
    get usernameInput() {return $('#user-name');}
    get passwordInput() {return $('#password');}
    get loginButton() {return $('#login-button');}
    get pageTitle() {return $('.title');}  
    get burgerMenuButton() {return $('#react-burger-menu-btn');}
    get logoutButton() {return $('#logout_sidebar_link');}
    get errorMessageText() {return $('//*[contains(text(),"Epic sadface")]');}

    async login(username, password) {
        await this.usernameInput.waitForDisplayed({ timeout: 5000 });
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async getTitle(title) {
        const getPageTitle = await this.pageTitle.getText();
        expect(getPageTitle).toEqual(title);
    }

    async findLogoutButton(){
        await this.burgerMenuButton.click();
        expect(this.logoutButton).toBeDisplayed();
    }

    async verifyErrorMessage(errorMessage){
    const displayedMessage = await this.errorMessageText.getText();
    expect(displayedMessage).toContain(errorMessage);
    }
}

module.exports = new LoginPage();
