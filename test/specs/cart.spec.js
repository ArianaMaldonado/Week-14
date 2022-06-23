const CartPage = require('../pageobjects/cart.page');
const Header = require('../pageobjects/header.page');
const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('Cart testing', () => {
    beforeAll('Open browser', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    describe('Cart button works', () => {
        it('Cart button exists', async () => {
            await Header.cartBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        });
    });

    describe('Cart items', () => {
        // beforeEach('Add an item to the cart', () => {
        //     InventoryPage.firstAdd.click();
        // });
        it('Cart title exists', async () => {
            await Header.cartBtn.click();
            await expect(CartPage.cartTitle).toExist();
        });
        it('Cart has items', async () => {
            browser.url('https://www.saucedemo.com/inventory.html');
            await InventoryPage.firstAdd.click();
            await Header.cartBtn.click();
            await expect(CartPage.cartItem).toExist();
            await expect(CartPage.priceItem).toExist();
            await expect(CartPage.priceItem).toExist();
        });
    });
    
    describe('Cart buttons works', () => {
        beforeEach('Add an item to the cart', () => {
            InventoryPage.firstAdd.click()
        });
        it('Continue shopping button', async () => {
            await Header.cartBtn.click()
            await expect(CartPage.continueBtn).toExist();
            await expect(CartPage.continueBtn).toBeClickable();
            await CartPage.continueBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Checkout button', async () => {
            await Header.cartBtn.click();
            await expect(CartPage.checkoutBtn).toExist();
            await expect(CartPage.checkoutBtn).toBeClickable();
            await CartPage.checkoutBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        });
        it('Remove item button', async () => {
            await Header.cartBtn.click();
            await expect(CartPage.removeItem).toExist();
            await expect(CartPage.removeItem).toBeClickable();
            await CartPage.removeItem.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        });
    });
});