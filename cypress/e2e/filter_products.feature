Feature: Filter products by price

  Scenario: Filter products from low to high price
    Given I am logged in and on the inventory page
    When I filter products by "Price (low to high)"
    Then the products should be sorted from lowest to highest price 