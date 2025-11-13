/// <reference types="cypress" />

import { ProductsPage } from "../../support/page_objects/ProductsPage";
import { CartPage } from "../../support/page_objects/CartPage";
import { CheckoutPage } from "../../support/page_objects/CheckoutPage";

const productsPage = new ProductsPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

let users;
const productName = 'Ingrid Running Jacket';

describe('E2E: Fluxo de Compra Completa (Loja EBAC)', () => {

    before(() => {
        cy.fixture('users').then(fixtureUsers => {
            users = fixtureUsers;
        });
    });

    beforeEach(() => {
        // --- 1. LOGIN  ---
        cy.login(users.validUser.email, users.validUser.password);
    });

    it(' Deve realizar o ciclo completo de Adicionar Produto e Prosseguir para o Checkout', () => {
        // --- 2. ADICIONAR PRODUTO ---
        productsPage.visitShop();
        productsPage.selectProductByName(productName);
        productsPage.addVariableProductToCart('M', 'White');
        
        // --- 3. VER CARRINHO ---
        productsPage.goToCartFromSuccessMessage();
        cartPage.assertProductInCart(productName);
        
        // --- 4. CHECKOUT ---
        cartPage.proceedToCheckout();
        checkoutPage.assertOnCheckoutPage();
    });
});