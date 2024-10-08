Feature: Cart Feature

  Scenario: Adding an item to the shopping cart
    Given I open the saucedemo website
    And I enter valid username <username> and password <password>
    When I select a product and click the "Add to cart" button
    Then the show button Remove on product added to cart
    And the cart icon should display "1"
    And the product should be visible in the cart

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
