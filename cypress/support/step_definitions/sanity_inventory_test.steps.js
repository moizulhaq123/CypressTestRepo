import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the inventory page without logging in', () => {
  cy.visit('/inventory.html');
});

Then('I should see the cart icon', () => {
  cy.get('.shopping_cart_link').should('be.visible');
});

Then('I should see the product sorting dropdown', () => {
  cy.get('[data-test="product-sort-container"]').should('be.visible');
});

Then('I should see the footer', () => {
  cy.get('footer').should('be.visible');
}); 