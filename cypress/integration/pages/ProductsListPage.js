/**
*   PageObject class for Products page
*/
class ProductsListPage {

    validateFirstProductSash(productSash) {
        cy.get('#productlist-results .productsash span').first()
            .invoke('text').should('eq', productSash);
    }

    validateFirstProductTitle(productTitle) {
        cy.get('#productlist-results .producttitle').first()
            .invoke('text').should('eq', productTitle);
    }

    validateFirstProductPrice(productPrice) {
        cy.get('#productlist-results .currentprice').first()
            .invoke('text').should('eq', productPrice);
    }

    clickProductItem(productSash) {
        cy.get('#productlist-results .productsash span').contains(productSash)
            .click();
    }

}

export default ProductsListPage