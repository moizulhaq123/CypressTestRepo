Feature: Add multiple products and verify cart

  Scenario: Add multiple products to the cart and verify cart badge
    Given I am logged in and on the inventory page
    When I add the first and second products to the cart
    Then the cart badge should show "2" 