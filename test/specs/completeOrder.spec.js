const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const Header = require('../pageobjects/header.page');
const CartPage = require('../pageobjects/cart.page');
const FirstCheckoutPage = require('../pageobjects/firstCheckout.page');
const SecondCheckoutPage = require('../pageobjects/secondCheckout.page');
const CompleteOrder = require('../pageobjects/completeOrder.page');

describe('Complete order test', () => {
    beforeEach('Login and go to Complete Order Page', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.firstAdd.click();
        await Header.cartBtn.click();
        await CartPage.checkoutBtn.click();
        await FirstCheckoutPage.fillCheckout('Ariana', 'Maldonado', '2000');
        await FirstCheckoutPage.btnContinue.click();
        await SecondCheckoutPage.finishBtn.click();
    });

    describe('Complete order elements exists', () => {
        it('Check title', async () => {
            await expect(CompleteOrder.title).toExist();
            await expect(CompleteOrder.title).toHaveText('CHECKOUT: COMPLETE!');
        });
        it('Check Complete Order header and description', async () => {
            await expect(CompleteOrder.header).toExist();
            await expect(CompleteOrder.header).toHaveTextContaining('THANK YOU FOR YOUR ORDER');
            await expect(CompleteOrder.orderText).toExist();
            await expect(CompleteOrder.orderText).toHaveTextContaining('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        });
        it('Check Image', async () => {
            await expect(CompleteOrder.orderImg).toExist();
            await expect(CompleteOrder.orderImg).toHaveAttr('alt');
        });
    });
    describe('Check back button', () => {
        it('Back Home button', async () => {
            await CompleteOrder.backHomeBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    });
});