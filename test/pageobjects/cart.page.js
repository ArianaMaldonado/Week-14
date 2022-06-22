class CartPage {
    //Getters
    get cartTitle() { return $('#header_container > div.header_secondary_container > span') };
    get cartItem() { return $('#item_4_title_link > div') };
    get priceItem() { return $('#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div') };
    get removeItem() { return $('#remove-sauce-labs-backpack') };
    
    get continueBtn() { return $('#continue-shopping') };
    get checkoutBtn() { return $('#checkout') };

    //Methods
    async buttonsClick () {
        await this.removeItem.click();
        await this.continueBtn.click();
        await this.checkoutBtn.click();
    };
};

module.exports = new CartPage();