Feature: Add to cart and complete order

  Scenario: Add a product to the cart and complete the order
    Given I am logged in and on the inventory page
    When I add the first product to the cart
    And I proceed to checkout and complete the order
    Then I should see the order confirmation message 