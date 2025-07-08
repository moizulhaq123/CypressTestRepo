import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the inventory page without logging in', () => {
  cy.visit('/inventory.html');
});

Then('the page should load successfully', () => {
  cy.location('pathname').should('include', '/inventory');
});

Then('I should see the product list or a login prompt', () => {
  // Check for either the product list or login form
  cy.get('body').then($body => {
    if ($body.find('.inventory_list').length) {
      cy.get('.inventory_list').should('be.visible');
    } else {
      cy.get('[data-test="login-button"]').should('be.visible');
    }
  });
});

Then('the page title should contain {string}', (title) => {
  cy.title().should('include', title);
}); 