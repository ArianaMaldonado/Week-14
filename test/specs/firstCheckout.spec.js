const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const Header = require('../pageobjects/header.page');
const CartPage = require('../pageobjects/cart.page');
const FirstCheckoutPage = require('../pageobjects/firstCheckout.page');

describe('First checkout page test', () => {
    beforeAll('Login', () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
    });

    describe('Checkout testing', () => {
        beforeEach('Add an item to the cart', () => {
            InventoryPage.firstAdd.click();
            Header.cartBtn.click();
            CartPage.checkoutBtn.click();
        });
        it('Click on Continue button with no information', async () => {
            await FirstCheckoutPage.fillCheckout('', '', '');
            await FirstCheckoutPage.btnContinue.click();
            await expect(FirstCheckoutPage.errorContainer.errorData).toHaveText('Error: First Name is required');
            await FirstCheckoutPage.crossBtnError.click();
        });
        it('Click con Continue button filling only first name input', async () => {
            await FirstCheckoutPage.fillCheckout('Ariana', '', '');
            await FirstCheckoutPage.btnContinue.click();
            await expect(FirstCheckoutPage.errorContainer.errorData).toHaveText('Error: Last Name is required');
            await FirstCheckoutPage.crossBtnError.click();
        });
        it('Click con Continue button filling only first and last name inputs', async () => {
            await FirstCheckoutPage.fillCheckout('Ariana', 'Maldonado', '');
            await FirstCheckoutPage.btnContinue.click();
            await expect(FirstCheckoutPage.errorContainer.errorData).toHaveText('Error: Postal Code is required');
            await FirstCheckoutPage.crossBtnError.click();
        });
        it('Click con Continue button filling three inputs with valid information', async () => {
            await FirstCheckoutPage.fillCheckout('Ariana', 'Maldonado', '2000');
            await FirstCheckoutPage.btnContinue.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        });
    });
});