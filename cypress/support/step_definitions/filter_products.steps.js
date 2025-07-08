import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I filter products by {string}', (filterOption) => {
  cy.get('[data-test="product-sort-container"]').select(filterOption);
});

Then('the products should be sorted from lowest to highest price', () => {
  cy.get('.inventory_item_price').then(($prices) => {
    const prices = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')));
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).to.deep.equal(sorted);
  });
}); 