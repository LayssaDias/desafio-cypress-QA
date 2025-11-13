export class CheckoutPage {
    private checkoutPath = '/checkout';
    private billingFieldsContainer = '.woocommerce-billing-fields';
    private firstNameInput = '#billing_first_name';
    private lastNameInput = '#billing_last_name';
    private companyInput = '#billing_company';
    private addressInput = '#billing_address_1';
    private cityInput = '#billing_city';
    private phoneInput = '#billing_phone';
    private emailInput = '#billing_email';
    private placeOrderButton = '#place_order';
    private orderReceivedPath = '/order-received/';
    private successNotice = '.woocommerce-notice--success';

   
    assertOnCheckoutPage() {
        cy.url().should('include', this.checkoutPath);
        cy.contains(this.billingFieldsContainer, 'Detalhes de faturamento').should('be.visible');
    }


    fillBillingDetails(data: {
        firstName: string,
        lastName: string,
        company: string,
        address: string,
        city: string,
        phone: string,
        email: string
    }) {
        cy.get(this.firstNameInput).clear().type(data.firstName);
        cy.get(this.lastNameInput).clear().type(data.lastName);
        cy.get(this.companyInput).clear().type(data.company);
        cy.get(this.addressInput).clear().type(data.address);
        cy.get(this.cityInput).clear().type(data.city);
        cy.get(this.phoneInput).clear().type(data.phone);
       
    }

    placeOrder(paymentMethodSelector: string = '#payment_method_cod') {
        cy.get(paymentMethodSelector).check();
        cy.get(this.placeOrderButton).click();
    }

    assertOrderPlacedSuccessfully() {
        cy.url().should('include', this.orderReceivedPath);
        cy.contains(this.successNotice, 'Obrigado. Seu pedido foi recebido.').should('be.visible');
    }
}