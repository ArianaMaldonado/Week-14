class firstCheckoutPage {
    //Getters
    get firstNameInput() { return $('') };
    get lastNameInput() { return $('') };
    get zipCodeInput() { return $('') };
    get btnContinue() { return $('') };
    get errorContainer() { return $('') };
    get btnError() { return $('') };
    get errorData() { return $('') };
    get title() { return $('') };

    //Methods
    async fillCheckout (firstName, lastName, zipCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.zipCodeInput.setValue(zipCode);
    };
};

module.exports = new firstCheckoutPage();

// // FALTAN LOS OBJETOS BY CLASS