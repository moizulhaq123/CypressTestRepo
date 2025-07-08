import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I add the first product to the cart', () => {
  cy.get('.inventory_item').first().find('button').click();
});

When('I proceed to checkout and complete the order', () => {
  cy.get('.shopping_cart_link').click();
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type('John');
  cy.get('[data-test="lastName"]').type('Doe');
  cy.get('[data-test="postalCode"]').type('12345');
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="finish"]').click();
});

Then('I should see the order confirmation message', () => {
  cy.contains('Thank you for your order').should('be.visible');
}); 