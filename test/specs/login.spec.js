const LoginPage = request('../pageobjects/login.page.js');

describe('Login page testing', () => {

    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/');
    });
    it('Login success', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
    });
    describe('Username input test', () => {
        it('empty username should display error', async () => {
            await LoginPage.login('', 'secret_sauce');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
        });
    });
});