const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const Header = require('../pageobjects/header.page');
const CartPage = require('../pageobjects/cart.page');
const FirstCheckoutPage = require('../pageobjects/firstCheckout.page');
const SecondCheckoutPage = require('../pageobjects/secondCheckout.page');
const CompleteOrder = require('../pageobjects/completeOrder.page');
const completeOrderPage = require('../pageobjects/completeOrder.page');

describe('Complete order test', () => {
    beforeEach('', () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
        InventoryPage.firstAdd.click();
        Header.cartBtn.click();
        CartPage.checkoutBtn.click();
        FirstCheckoutPage.fillCheckout('Ariana', 'Maldonado', '2000');
        FirstCheckoutPage.btnContinue.click();
        SecondCheckoutPage.finishBtn.click();
    });

    describe('Complete order elements exists', () => {
        it('Correct texts', async () => {
            await expect(CompleteOrder.title).toExist();
            await expect(CompleteOrder.header).toHaveText('THANK YOU FOR YOUR ORDER');
            await expect(CompleteOrder.orderText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
            await expect(CompleteOrder.orderImg).toHaveText('THANK YOU FOR YOUR ORDER'); 
            await expect(completeOrderPage.imgAtributte).toBe('/static/media/pony-express.46394a5d.png');
        });
        it('Back Home button', async () => {
            await CompleteOrder.backHomeBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    });
});