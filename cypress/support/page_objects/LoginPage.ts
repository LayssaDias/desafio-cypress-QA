export class LoginPage {
  private usernameInput = '#username'; 
  private passwordInput = '#password'; 
  private loginButton = '[name="login"]'; 
  private successMessage = '.woocommerce-MyAccount-content > :nth-child(2)';
  private myAccountPath = '/minha-conta/'; 
  private errorMessage = '.woocommerce-error'; 
  
  visit() {
    cy.visit('/minha-conta/');
  }

  fillUsername(username: string) {
    cy.get(this.usernameInput).type(username);
  }

  fillPassword(password: string) {
    cy.get(this.passwordInput).type(password);
  }

  submit() {
    cy.get(this.loginButton).click();
  }

  login(username: string, password: string) {
      this.visit();
      this.fillUsername(username);
      this.fillPassword(password);
      this.submit();
  }

  assertLoginSuccess() {
    cy.get(this.successMessage).should('contain', 'Olá,');
    
    cy.url().should('include', this.myAccountPath);
  }

  assertLoginFailure(expectedPartialMessage: string) {
    cy.get(this.errorMessage)
      .should('be.visible')
      
    cy.get(this.errorMessage).contains(expectedPartialMessage);
    
    cy.url().should('not.include', '/dashboard'); 
 }
}