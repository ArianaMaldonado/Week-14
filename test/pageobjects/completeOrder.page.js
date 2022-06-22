class CompleteOrder {
    //Getters
    get title() { return $('#header_container > div.header_secondary_container > span') };
    get header() { return $('#checkout_complete_container > h2') };
    get orderText() { return $('#checkout_complete_container > div') };
    get orderImg() { return $('#checkout_complete_container > img') };
    get backHomeBtn() { return $('#back-to-products') };

    //Methods
    async buttonClick () {
        await this.backHomeBtn.click();
    };
    async imgAtributte () {
        await this.orderImg.getAttribute(src);
    };
};

module.exports = new CompleteOrder();