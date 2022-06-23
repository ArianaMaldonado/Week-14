class firstCheckoutPage {
    //Getters
    get firstNameInput() { return $('#first-name') };
    get lastNameInput() { return $('#last-name') };
    get zipCodeInput() { return $('#postal-code') };
    get btnContinue() { return $('#continue') };
    get btnCancel() { return $('#cancel') };
    get errorContainer() { return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error') };
    get crossBtnError() { return $('div.error-message-container.error > h3 > button > svg') };
    get errorData() { return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3') };
    get title() { return $('#header_container > div.header_secondary_container > span') };

    //Methods
    async fillCheckout (firstName, lastName, zipCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.zipCodeInput.setValue(zipCode);
    };
};

module.exports = new firstCheckoutPage();