const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const Header = require('../pageobjects/header.page');
const CartPage = require('../pageobjects/cart.page');
const FirstCheckoutPage = require('../pageobjects/firstCheckout.page');
const SecondCheckoutPage = require('../pageobjects/secondCheckout.page');

describe('Second checkout page test', () => {
    beforeAll('Login and go to Checkout 2nd Page', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.firstAdd.click();
        await Header.cartBtn.click();
        await CartPage.checkoutBtn.click();
        await FirstCheckoutPage.fillCheckout('Ariana', 'Maldonado', '2000');
        await FirstCheckoutPage.btnContinue.click();
    });

    describe('Second checkout page information', () => {
        it('Correct page URL', async () => {
            await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        });
        it('Title ', async () => {
            await expect(SecondCheckoutPage.title).toExist();
            await expect(SecondCheckoutPage.title).toHaveText('CHECKOUT: OVERVIEW');
        });
    });

    describe('Item information', () => {
        it('Item name', async () => {
            await expect(SecondCheckoutPage.itemName).toExist();
            await expect(SecondCheckoutPage.itemName).toHaveText('Sauce Labs Backpack');
        });
        it('Item description', async () => {
            await expect(SecondCheckoutPage.itemDescription).toExist();
            await expect(SecondCheckoutPage.itemDescription).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        });
        it('Item payment information', async () => {
            await expect(SecondCheckoutPage.itemPrice).toExist();
            await expect(SecondCheckoutPage.itemPrice).toHaveText('$29.99');
            await expect(SecondCheckoutPage.paymentInfo).toHaveTextContaining('SauceCard #31337');
            await expect(SecondCheckoutPage.shippingInfo).toHaveTextContaining('FREE PONY EXPRESS DELIVERY!');
        });
    });

    describe ('Price Summary', () => {
        it('Check Item total', async () => {
            await expect(SecondCheckoutPage.itemTotalData).toExist();
            await expect(SecondCheckoutPage.itemTotalData).toHaveText('Item total: $29.99');
        });
        it('Check Item Tax', async () => {
            await expect(SecondCheckoutPage.itemTaxData).toExist();
            await expect(SecondCheckoutPage.itemTaxData).toHaveText('Tax: $2.40');
        });
        it('Check Item total price', async () => {
            await expect(SecondCheckoutPage.totalPriceData).toExist();
            await expect(SecondCheckoutPage.totalPriceData).toHaveText('Total: $32.39');
        });
    });

    describe ('Buttons testing', () => {
        it('Click on Cancel button', async () => {
            await SecondCheckoutPage.cancelBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Come back to Checkout 2nd Page', async () => {
            await Header.cartBtn.click();
            await CartPage.checkoutBtn.click();
            await FirstCheckoutPage.fillCheckout('Ariana', 'Maldonado', '2000');
            await FirstCheckoutPage.btnContinue.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        });
        it('Click on Finish button', async () => {
            await SecondCheckoutPage.finishBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        });
    });
});