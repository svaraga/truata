/**
 *   PageObject class for Checkout page
 */
class CheckoutPage {

    validateCheckoutPage() {
        cy.url().should('include', '/checkout');
    }

    validateTotal(total) {
        cy.get('.final_totals .cost_price')
            .invoke('text').should('eq', total);
    }
}

export default CheckoutPage