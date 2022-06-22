class SecondCheckout {
    //Getters
    get title() { return $('#header_container > div.header_secondary_container > span') };
    get itemName() { return $('#item_4_title_link > div') };
    get itemDescription() { return $('#checkout_summary_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.inventory_item_desc') };
    get itemPrice() { return $('#checkout_summary_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div') };
    get paymentInfo() { return $('#checkout_summary_container > div > div.summary_info > div:nth-child(1)') };
    get shippingInfo() { return $('#checkout_summary_container > div > div.summary_info > div:nth-child(3)') };
    get itemTotalData() { return $('#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label') };
    get itemTaxData() { return $('#checkout_summary_container > div > div.summary_info > div.summary_tax_label') };
    get totalPriceData() { return $('#checkout_summary_container > div > div.summary_info > div.summary_total_label') };
    get cancelBtn() { return $('#cancel') };
    get finishBtn() { return $('#finish') };

    //Methods
    async buttonsClick () {
        await this.cancelBtn.click();
        await this.finishBtn.click();
    };
};

module.exports = new SecondCheckout();