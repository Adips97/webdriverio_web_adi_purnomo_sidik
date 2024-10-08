Feature: Login Feature

  Scenario: Valid login with correct credentials
    Given I open the saucedemo website
    When I enter valid username <username> and password <password>
    Then I should be redirected to the products page
    And I should see the "Products" title
    And I should see the Logout button

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
