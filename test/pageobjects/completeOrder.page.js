class CompleteOrder {
    //Getters
    get title() { return $('#header_container > div.header_secondary_container > span') };
    get header() { return $('#checkout_complete_container > h2') };
    get orderText() { return $('#checkout_complete_container > div') };
    get orderImg() { return $('#checkout_complete_container > img') };
    get backHomeBtn() { return $('#back-to-products') };

    //Methods
    async imgAtributte () {
        await this.orderImg.getAtributte();
    };
};

module.exports = new CompleteOrder();