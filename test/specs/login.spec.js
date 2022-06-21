const LoginPage = require('../pageobjects/login.page');

describe('Login page testing', () => {

    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/');
    });
    describe('Username input test', () => {
        it('Empty username should display error', async () => {
            await LoginPage.login('', 'secret_sauce');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required');
        });
        it('Invalid username', async () => {
            await LoginPage.login('Invalid', 'secret_sauce');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
        });
    });
    
    describe('Password input test', () => {
        it('Empty password should display error', async () => {
            await LoginPage.login('standard_user', '');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Password is required');
        });
        it('Invalid password', async () => {
            await LoginPage.login('standard_user', 'invalidpw');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
        });
    });
    // describe('Login success', () => {
    //     it('Login success - valid user 1', async () => {
    //         await LoginPage.login('standard_user', 'secret_sauce');
    //         await LoginPage.burgerButton.click();
    //         await LoginPage.logoutButton.click();
    //     });
    //     it('Login success - valid user 2', async () => {
    //         await LoginPage.login('locked_out_user', 'secret_sauce');
    //         await LoginPage.burgerButton.click();
    //         await LoginPage.logoutButton.click();
    //     });
    //     it('Login success - valid user 3', async () => {
    //         await LoginPage.login('problem_user', 'secret_sauce');
    //         await LoginPage.burgerButton.click();
    //         await LoginPage.logoutButton.click();
    //     });
    //     it('Login success - valid user 4', async () => {
    //         await LoginPage.login('performance_glitch_user', 'secret_sauce');
    //     });
    // });
});