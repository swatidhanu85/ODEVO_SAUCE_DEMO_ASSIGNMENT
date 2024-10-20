import { ADD_TO_CART, ADD_TO_CART_LINK, CHECKOUT,CONTINUE,FINISH,FIRST_NAME,INVETORY_ITEM, LAST_NAME, LOGIN_BUTTON, PASSWORD_INPUT, PIN_CODE, PRODUCT_DESC, THANK_YOU, USERID_INPUT } from "../support/FieldRef";

describe('Demosauce site', () => {
  beforeEach( "Successful login", () => {
    cy.visit(Cypress.config().baseUrl)
    cy.get(USERID_INPUT).type('standard_user');
        
    // Enter password
    cy.get(PASSWORD_INPUT).type('secret_sauce');
    
    // Click the login button
    cy.get(LOGIN_BUTTON).click();
})

it('Shopping page', () => {

  //Select Item from shopping site and add to cart
  cy.contains('Sauce Labs Backpack').should('be.visible');
  cy.contains('$29.99').should('be.visible');
  cy.get(PRODUCT_DESC).should('be.visible');
  cy.get(INVETORY_ITEM).click();
  cy.get(ADD_TO_CART).click();
  cy.scrollTo('top');
  
  //Go to Shopping cart page
 
  cy.get(ADD_TO_CART_LINK).click();
  
  //Checkout
  cy.get(CHECKOUT).click();

  //Fill in information
  cy.get(FIRST_NAME).should('be.visible').type('testperson');
  cy.get(LAST_NAME).should('be.visible').type('lastname');
  cy.get(PIN_CODE).should('be.visible').type('12345');


  //Continue with form
  cy.get(CONTINUE).click();

  //Verify Information - Checkout overview
  cy.contains('Sauce Labs Backpack').should('be.visible');
  cy.contains('$29.99').should('be.visible');
  cy.get(PRODUCT_DESC).should('be.visible');
  cy.contains('Price Total').should('be.visible');

  // Finish the form
  cy.get(FINISH).click();
    
  //Assertion - last page 
  cy.get(THANK_YOU).should('be.visible');
 
})
})