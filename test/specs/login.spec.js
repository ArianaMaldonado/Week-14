const LoginPage = request('../pageobjects/login.page')
describe('Login page testing', () => {

    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/');
    });
    it('Login success', async () => {
        await LoginPage.inputUsername.setValue('standard_user');
        await LoginPage.inputPassword.setValue('secret_sauce');
        await LoginPage.btnLogin.click();
    });
});