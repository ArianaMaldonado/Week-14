const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const Header = require('../pageobjects/header.page');
const CartPage = require('../pageobjects/cart.page');
const FirstCheckoutPage = require('../pageobjects/firstCheckout.page');

describe('First checkout page test', () => {
    beforeAll('Login and go to Checkout Page', () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
        InventoryPage.firstAdd.click();
        Header.cartBtn.click();
        CartPage.checkoutBtn.click();
    });

    describe('Checkout Title', () => {
        it('Title exists', async () => {
            await expect(FirstCheckoutPage.title).toHaveText('CHECKOUT: YOUR INFORMATION');
        });
        it('Title not clickeable', async () => {
            await expect(FirstCheckoutPage.title).toBeClickable();
        });
    });

    describe('Cancel button testing', () => {
        it('Cancel button exists', async () => {
            await expect(FirstCheckoutPage.btnCancel).toExist();
            await expect(FirstCheckoutPage.btnCancel).toBeClickable();
            await FirstCheckoutPage.btnCancel.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
            await CartPage.checkoutBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        });
    });

    describe('Checkout testing', () => {
        it('Click on Continue button with empty fields', async () => {
            await FirstCheckoutPage.fillCheckout('', '', '');
            await FirstCheckoutPage.btnContinue.click();
            await expect(FirstCheckoutPage.errorContainer).toHaveTextContaining('Error: First Name is required');
            await FirstCheckoutPage.crossBtnError.click();
        });
        it('Click con Continue button filling only first name input', async () => {
            await FirstCheckoutPage.fillCheckout('Ariana', '', '');
            await FirstCheckoutPage.btnContinue.click();
            await expect(FirstCheckoutPage.errorContainer).toHaveText('Error: Last Name is required');
            await FirstCheckoutPage.crossBtnError.click();
        });
        it('Click con Continue button filling only first and last name inputs', async () => {
            await FirstCheckoutPage.fillCheckout('Ariana', 'Maldonado', '');
            await FirstCheckoutPage.btnContinue.click();
            await expect(FirstCheckoutPage.errorContainer).toHaveText('Error: Postal Code is required');
            await FirstCheckoutPage.crossBtnError.click();
        });
        it('Click con Continue button filling three inputs with valid information', async () => {
            await FirstCheckoutPage.fillCheckout('Ariana', 'Maldonado', '2000');
            await FirstCheckoutPage.btnContinue.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
            await browser.pause(1000);
        });
    });
});