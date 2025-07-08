Feature: Sanity test for UI elements (no login)

  Scenario: Cart icon is present
    Given I am logged in and on the inventory page
    Then I should see the cart icon

  Scenario: Product sorting dropdown is present
    Given I am logged in and on the inventory page
    Then I should see the product sorting dropdown

  Scenario: Footer is present
    Given I am logged in and on the inventory page
    Then I should see the footer 