class Header {
    //Getters
    get headerLogo() { return $('#header_container > div.primary_header > div.header_label > div') };
    get burgerBtn() { return $('#react-burger-menu-btn') };
    get sidebar() { return $('#menu_button_container > div > div.bm-menu-wrap > div.bm-menu > nav') };
    get allItemsSidebar() { return $('#inventory_sidebar_link') };
    get aboutSidebar() { return $('#about_sidebar_link') };
    get logoutSidebar() { return $('#logout_sidebar_link') };
    get resetAppStateSidebar() { return $('#reset_sidebar_link') };
    get closeSidebar() { return $('#react-burger-cross-btn') };
    get cartBtn() { return $('#shopping_cart_container > a') };

    //Methods
};

module.exports = new Header();