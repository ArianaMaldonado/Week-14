class LoginPage {
// Getters
    get inputUsername() { return $('#user-name') };;
    get inputPassword() { return $('#password') };
    get btnLogin() { return $('#login-button') };
    get errorContainer() { return $('.error-message-container.error') };

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
};
export default new LoginPage();
