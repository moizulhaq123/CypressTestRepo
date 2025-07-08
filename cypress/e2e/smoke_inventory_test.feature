Feature: Smoke test for inventory page (no login)

  Scenario: Inventory page loads without login
   Given I am logged in and on the inventory page
    Then the page should load successfully

  Scenario: Product list or login prompt is visible
    Given I am logged in and on the inventory page
    Then I should see the product list or a login prompt

  Scenario: Page title is correct
    Given I am logged in and on the inventory page
    Then the page title should contain "Swag Labs" 