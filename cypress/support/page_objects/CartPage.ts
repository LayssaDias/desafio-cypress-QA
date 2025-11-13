export class CartPage {
    private productInCartSelector = 'td.product-name'; 
    private checkoutButtonSelector = '.checkout-button';
    private cartPagePath = '/carrinho/'; 

    visit() {
        cy.visit(this.cartPagePath);
    }

    assertOnCartPage() {
        cy.url().should('include', this.cartPagePath);
        cy.contains('h1', 'Carrinho').should('be.visible');
    }

    assertProductInCart(productName: string) {
        cy.contains(this.productInCartSelector, productName)
            .should('exist')
            .and('be.visible');
    }

    proceedToCheckout() {
        cy.get(this.checkoutButtonSelector)
            .should('be.visible')
            .click();
    }
}