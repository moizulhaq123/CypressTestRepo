import { Given } from "@badeball/cypress-cucumber-preprocessor";

const username = "standard_user";
const password = "secret_sauce";

Cypress.Commands.add("login", () => {
  cy.visit("/");
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
  cy.url().should("include", "/inventory.html");
});

Given("I am logged in and on the inventory page", () => {
  cy.login().then(() => {
    // cy.visit("/inventory.html");
  });
});
