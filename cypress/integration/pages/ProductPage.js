/**
 *   PageObject class for Products page
 */
class ProductPage {

    validateProductTitle(searchitem) {
        cy.get('.product-name')
            .invoke('text').should('eq', searchitem);
    }

    validateProductPrice(price) {
        cy.get('#product-price-current')
            .invoke('text').should('eq', price);
    }

    clickOnBuyNow() {
        cy.get('div button').contains('Buy now').click();
    }
}

export default ProductPage