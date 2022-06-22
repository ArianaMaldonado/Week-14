const LoginPage = require('../pageobjects/login.page');

describe('Login page testing', () => {

    beforeAll('Open browser', () => {
        browser.url('https://www.saucedemo.com/');
    });
    beforeEach('Refresh browser', () => {
        browser.refresh();
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
            await LoginPage.login('standard_user', 'invalid');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
        });
    });
    describe('Login with locked_out_user', () => {
        it('Should not login because user is locked', async () => {
            await LoginPage.open();
            await LoginPage.login('locked_out_user', 'secret_sauce');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        });
    });
    describe('Login with problem_user', () => {
        it('Login should lead us to a crashed link', async () => {
            await LoginPage.open();
            await LoginPage.login('problem_user', 'secret_sauce');
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    });
    describe('Login with performance_glitch_user', () => {
        it('Should evidence performance glitch data', async () => {
            await LoginPage.open();
            await LoginPage.login('performance_glitch_user', 'secret_sauce');
            await browser.setTimeout({ 'pageLoad': 10000 });
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    });
    describe('Login with standard_user', () => {
        it('Login should be successful', async () => {
            await LoginPage.open();
            await LoginPage.login('standard_user', 'secret_sauce');
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    });
});