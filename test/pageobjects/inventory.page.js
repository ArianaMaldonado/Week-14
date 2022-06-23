class InventoryPage {
    //Getters
    get productsTitle() { return $('#header_container > div.header_secondary_container > span') };
    get productsLogo() { return $('#header_container > div.header_secondary_container > div.peek') };

    //First item
    get firstImg() { return $('#item_4_img_link > img') };
    get firstItemName() { return $('#item_4_title_link > div') };
    get firstDescription() { return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > div') };
    get firstAdd() { return $('#add-to-cart-sauce-labs-backpack') };
    get firstRemove() { return $('#remove-sauce-labs-backpack') };

    //Second Item
    get secondImg() { return $('#item_0_img_link > img') };
    get secondItemName() { return $('#item_0_title_link > div') };
    get secondDescription() { return $('#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.inventory_item_label > div') };
    get secondAdd() { return $('#add-to-cart-sauce-labs-bike-light') };
    get secondRemove() { return $('#remove-sauce-labs-bike-light') };

    //Third Item
    get thirdImg() { return $('#item_1_img_link > img') };
    get thirdItemName() { return $('#item_1_img_link > img') };
    get thirdDescription() { return $('#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.inventory_item_label > div') };
    get thirdAdd() { return $('#add-to-cart-sauce-labs-bolt-t-shirt') };
    get thirdRemove() { return $('#remove-sauce-labs-bolt-t-shirt') };

    //Fourth Item
    get fourthImg() { return $('#item_5_img_link > img') };
    get fourthItemName() { return $('#item_5_title_link > div') };
    get fourthDescription() { return $('#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.inventory_item_label > div') };
    get fourthAdd() { return $('#add-to-cart-sauce-labs-fleece-jacket') };
    get fourthRemove() { return $('#remove-sauce-labs-fleece-jacket') };

    //Fifth Item
    get fifthImg() { return $('#item_2_img_link > img') };
    get fifthItemName() { return $('#item_2_title_link > div') };
    get fifthDescription() { return $('#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.inventory_item_label > div') };
    get fifthAdd() { return $('#add-to-cart-sauce-labs-onesie') };
    get fifthRemove() { return $('#remove-sauce-labs-onesie') };

    //Sixth Item
    get sixthImg() { return $('#item_3_img_link > img') };
    get sixthItemName() { return $('#item_3_title_link > div') };
    get sixthDescription() { return $('#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.inventory_item_label > div') };
    get sixthAdd() { return $('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)') };
    get sixthRemove() { return $('#remove-test\.allthethings\(\)-t-shirt-\(red\)') };
    

    get backBtn() { return $('#back-to-products') };

    //Methods

    async open() {
        return browser.url('http://www.saucedemo.com/');
    };
    
    async imgClick() {
        await this.firstImg.click();
        await this.secondImg.click();
        await this.thirdImg.click();
        await this.fourthImg.click();
        await this.fifthImg.click();
        await this.sixthImg.click();
    };

    async nameClick() {
        await this.firstItemName.click();
        await this.secondItemName.click();
        await this.thirdItemName.click();
        await this.fourthItemName.click();
        await this.fifthItemName.click();
        await this.sixthItemName.click();
    };

    async addClick() {
        await this.firstAdd.click();
        await this.secondAdd.click();
        await this.thirdAdd.click();
        await this.fourthAdd.click();
        await this.fifthAdd.click();
        await this.sixthAdd.click();
    };

    async removeClick() {
        await this.firstRemove.click();
        await this.secondRemove.click();
        await this.thirdRemove.click();
        await this.fourthRemove.click();
        await this.fifthRemove.click();
        await this.sixthRemove.click();
    };

    async backBtnClick() {
        await this.backBtn.click();
    };
    async openInventory() {
        browser.url('https://www.saucedemo.com/inventory.html');
    };
};

module.exports = new InventoryPage();