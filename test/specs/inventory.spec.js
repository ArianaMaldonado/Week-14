const InventoryPage = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');
const Header = require('../pageobjects/header.page');

describe('Inventory page test', () => {
    beforeEach('Login to access to inventory page', () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');
    });

    describe('Testing burger button and sidebar', () => {
        beforeEach('Open inventory', () => {
            browser.url('https://www.saucedemo.com/inventory.html');
        });
        it('Testing sidebar', async () => {
            await Header.burgerBtn.click();
            await expect(Header.sidebar).toExist();
        });
        it('Testing sidebar: All Items', async () => {
            await Header.burgerBtn.click();
            await expect(Header.allItemsSidebar).toExist();
            await expect(Header.allItemsSidebar).toBeClickable();
        });
        it('Testing sidebar: About', async () => {
            await Header.burgerBtn.click();
            await expect(Header.aboutSidebar).toExist();
            await expect(Header.aboutSidebar).toBeClickable();
            await Header.aboutSidebar.click();
            await expect(browser).toHaveUrl('https://saucelabs.com/');
        });
        it('Testing sidebar: Logout', async () => {
            await Header.burgerBtn.click();
            await expect(Header.logoutSidebar).toExist();
            await expect(Header.logoutSidebar).toBeClickable();
            await Header.logoutSidebar.click();
            await expect(browser).toHaveUrl('http://www.saucedemo.com/');
        });
        it('Testing sidebar: Reset App State', async () => {
            await Header.burgerBtn.click();
            await expect(Header.resetAppStateSidebar).toExist();
            await expect(Header.resetAppStateSidebar).toBeClickable();
        });
        it('Testing sidebar: close button', async () => {
            await Header.burgerBtn.click();
            await expect(Header.closeSidebar).toExist();
            await expect(Header.closeSidebar).toBeClickable;
            await Header.closeSidebar.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    });

    describe('Testing image redirection links and back button', () => {
        it('First image redirection', async () => {
            await InventoryPage.firstImg.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
            await InventoryPage.backBtnClick();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Second image redirection', async () => {
            await InventoryPage.secondImg.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0');
            await InventoryPage.backBtnClick();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Third image redirection', async () => {
            await InventoryPage.thirdImg.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1');
            await InventoryPage.backBtnClick();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Fourth image redirection', async () => {
            await InventoryPage.fourthImg.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5');
            await InventoryPage.backBtnClick();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Fifth image redirection', async () => {
            await InventoryPage.fifthImg.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2');
            await InventoryPage.backBtnClick();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Sixth image redirection', async () => {
            await InventoryPage.sixthImg.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3');
            await InventoryPage.backBtnClick();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    });

    describe('Testing item name redirection links and back button', () => {
        it('First item name redirection', async () => {
            await InventoryPage.firstItemName.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
            await InventoryPage.backBtnClick();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Second item name redirection', async () => {
            await InventoryPage.secondItemName.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0');
            await InventoryPage.backBtnClick();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Third item name redirection', async () => {
            await InventoryPage.thirdItemName.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1');
            await InventoryPage.backBtnClick();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Fourth item name redirection', async () => {
            await InventoryPage.fourthItemName.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5');
            await InventoryPage.backBtnClick();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Fifth item name redirection', async () => {
            await InventoryPage.fifthItemName.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2');
            await InventoryPage.backBtnClick();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Sixth item name redirection', async () => {
            await InventoryPage.sixthItemName.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3');
            await InventoryPage.backBtnClick();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    });

    describe('Testing add and remove buttons', () => {
        it('Testing add and remove buttons from first item', async () => {
            await InventoryPage.firstAdd.click();
            await expect(Header.cartBtn).toBeDisplayed();
            await InventoryPage.firstRemove.click();
        });
        it('Testing add and remove buttons from second item', async () => {
            await InventoryPage.secondAdd.click();
            await expect(Header.cartBtn).toBeDisplayed();
            await InventoryPage.secondRemove.click();
        });
        it('Testing add and remove buttons from third item', async () => {
            await InventoryPage.thirdAdd.click();
            await expect(Header.cartBtn).toBeDisplayed();
            await InventoryPage.thirdRemove.click();
        });
        it('Testing add and remove buttons from fourth item', async () => {
            await InventoryPage.fourthAdd.click();
            await expect(Header.cartBtn).toBeDisplayed();
            await InventoryPage.fourthRemove.click();
        });
        it('Testing add and remove buttons from fifth item', async () => {
            await InventoryPage.fifthAdd.click();
            await expect(Header.cartBtn).toBeDisplayed();
            await InventoryPage.fifthRemove.click();
        });
        it('Testing add and remove buttons from sixth item', async () => {
            await InventoryPage.sixthAdd.click();
            await expect(Header.cartBtn).toBeDisplayed();
            await InventoryPage.sixthRemove.click();
        });
    });
    describe('Testing description', () => {
        it('First item description to exists', async () => {
            await expect(InventoryPage.firstDescription).toExist();
        });
        it('Second item description to exists', async () => {
            await expect(InventoryPage.secondDescription).toExist();
        });
        it('Third item description to exists', async () => {
            await expect(InventoryPage.thirdDescription).toExist();
        });
        it('Fourth item description to exists', async () => {
            await expect(InventoryPage.fourthDescription).toExist();
        });
        it('Fifth item description to exists', async () => {
            await expect(InventoryPage.fifthDescription).toExist();
        });
        it('Sixth item description to exists', async () => {
            await expect(InventoryPage.sixthDescription).toExist();
        });
    });
});