export class ProductsPage {

    visitShop() {
        cy.visit('/shop');
    }
    
    selectProductByName(name: string) {
        cy.get('.products').should('be.visible');
        cy.contains('h3.name a', name)
          .should('be.visible')
          .click();
    }

    addVariableProductToCart(size: string, color: string, quantity: number = 1) {
        cy.get(`.button-variable-item-${size}`).click(); 
        cy.get(`.button-variable-item-${color}`).click(); 

        if (quantity > 1) {
            cy.get('.input-text.qty').clear().type(quantity.toString());
        }
        
        cy.get('.single_add_to_cart_button').click();
    }

    goToCartFromSuccessMessage() {
        cy.get('.woocommerce-message > .button').click();
    }
}