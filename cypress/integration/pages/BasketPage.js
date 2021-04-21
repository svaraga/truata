/**
 *   PageObject class for Basket page
 */
class BasketPage {

    validateBasketPage() {
        cy.url().should('include', '/Basket');
    }

    validateTotal(total) {
        cy.get('.totalPriceBasket')
            .invoke('text').should('eq', total);
    }

    goToCheckOut() {
        cy.get('.pay-secure-now-bottom')
            .click();
    }
}

export default BasketPage