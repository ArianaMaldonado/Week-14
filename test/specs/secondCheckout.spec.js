const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const Header = require('../pageobjects/header.page');
const CartPage = require('../pageobjects/cart.page');
const FirstCheckoutPage = require('../pageobjects/firstCheckout.page');
const SecondCheckoutPage = require('../pageobjects/secondCheckout.page');

describe('Second checkout page test', () => {
    beforeEach('', () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
        InventoryPage.firstAdd.click();
        Header.cartBtn.click();
        CartPage.checkoutBtn.click();
        FirstCheckoutPage.fillCheckout('Ariana', 'Maldonado', '2000');
        FirstCheckoutPage.btnContinue.click();
    });

    describe('Second checkout page information', () => {
        it('Item information', async () => {
            await expect(SecondCheckoutPage.title).toExist();
            await expect(SecondCheckoutPage.itemName).toExist();
            await expect(SecondCheckoutPage.itemDescription).toExist();
            await expect(SecondCheckoutPage.itemPrice).toExist();
            await expect(SecondCheckoutPage.paymentInfo).toHaveText('SauceCard #31337');
            await expect(SecondCheckoutPage.shippingInfo).toHaveText('FREE PONY EXPRESS DELIVERY!');
        });
        it('Price summary', async () => {
            await expect(SecondCheckoutPage.itemTotalData).toExist();
            await expect(SecondCheckoutPage.itemTaxData).toExist();
            await expect(SecondCheckoutPage.totalPriceData).toExist();
        });
        it('Click on Cancel button', async () => {
            await SecondCheckoutPage.cartBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Click on Finish button', async () => {
            await SecondCheckoutPage.finishBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        });
    });
});