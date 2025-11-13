/// <reference types="cypress" />

import { LoginPage } from "../../support/page_objects/LoginPage";

const loginPage = new LoginPage();
let loginData; // Variável para as mensagens de erro (loginData.json)
let users;     // Variável para as credenciais (users.json)

describe('Funcionalidade: Login na Loja EBAC (Usando Page Object)', () => {

    before(() => {
        // Carrega as mensagens de erro
        cy.fixture('loginData').then(fixtureData => {
            loginData = fixtureData;
        });
        
        // Carrega as credenciais de usuário
        cy.fixture('users').then(fixtureUsers => {
            users = fixtureUsers;
        });
    });

    beforeEach(() => {
        loginPage.visit();
    });

    it('Deve realizar o login com sucesso com dados válidos', () => {
        loginPage.login(users.validUser.email, users.validUser.password);
        
        loginPage.assertLoginSuccess();
    });

    it('Deve exibir mensagem de erro ao tentar logar com SENHA INVÁLIDA', () => {
        loginPage.login(users.invalidPassword.email, users.invalidPassword.password);

        loginPage.assertLoginFailure(loginData.errorMessages.invalidPassword);
    });

    it('Deve exibir mensagem de erro ao tentar logar com E-MAIL INVÁLIDO', () => {
        loginPage.login(users.nonExistentUser.email, users.nonExistentUser.password);
        
        loginPage.assertLoginFailure(loginData.errorMessages.unknownEmail);
    });

    it('Deve exibir mensagem de erro ao tentar logar com CAMPOS VAZIOS', () => {
        loginPage.submit();
        
        loginPage.assertLoginFailure(loginData.errorMessages.emptyFields);
    });
});