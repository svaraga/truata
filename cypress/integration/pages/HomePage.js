/**
*   PageObject class for Home page
*/
class HomePage {

    /**
    *   Loads the application. Url is set in the configuration file
    */
    loadHomePage() {
        cy.visit('/')
    }

    closeSignupPopUp() {
        cy.get('#crmSignUp', { timeout: 15000 }).should('be.visible');
        cy.get('#crmSignUp #bag-modal-close').click();
    }

    searchForItem(searchItemName) {
        cy.get('#search-field').should('be.visible')
            .type(searchItemName)
                .type('{enter}')
    }
}

export default HomePage