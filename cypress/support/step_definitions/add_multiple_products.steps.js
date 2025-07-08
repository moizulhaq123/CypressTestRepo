import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I add the first and second products to the cart', () => {
  cy.get('.inventory_item').eq(0).find('button').click();
  cy.get('.inventory_item').eq(1).find('button').click();
});

Then('the cart badge should show {string}', (count) => {
  cy.get('.shopping_cart_badge').should('have.text', count);
}); 