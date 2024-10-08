const { expect, $ } = require('@wdio/globals')

class InvetoryPage {
    get firstProductNameElement() {return $('.inventory_item_name');}
    get firstProductAddToCartButton() {return $('button[data-test="add-to-cart-sauce-labs-backpack"]');}
    get removeButton() {return $('button[data-test="remove-sauce-labs-backpack"]');}
    get cartBadge() {return $('.shopping_cart_badge');}
    get cartButton() {return $('.shopping_cart_link');}
    get firstCartItem() {return $('.inventory_item_name');}

    async addProducttoCart() {
        this.selectedProductName = await this.firstProductNameElement.getText();
        await this.firstProductAddToCartButton.click();
    }

    async verifyShowRemoveButton(title) {
        await expect(this.removeButton).toBeDisplayed();
    }

    async verifyBadgeCart(itemCount) {
        const cartItemCount = await this.cartBadge.getText();
        expect(cartItemCount).toEqual(itemCount);
    }

    async verifyProductonCart() {
        await this.cartButton.click();
        const cartProductName = await this.firstCartItem.getText();
        expect(cartProductName).toEqual(this.selectedProductName);
    }
}

module.exports = new InvetoryPage();
