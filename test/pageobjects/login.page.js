class LoginPage {
// Getters
    get inputUsername() { return $('#user-name') };;
    get inputPassword() { return $('#password') };
    get btnLogin() { return $('#login-button') };
    get errorContainer() { return $('#login_button_container > div > form > div.error-message-container') };
    get burgerButton() { return $('#react-burger-menu-btn') };
    get logoutButton() { return $('#logout_sidebar_link') };

// Setters
    async setUsername(username) {
        await this.inputUsername.setValue(username);
    };
    async setPassword(password) {
        await this.inputPassword.setValue(password);
    };
// Methods
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    };
    async open() {
        browser.url('http://www.saucedemo.com/');
    };
};
module.exports = new LoginPage();
