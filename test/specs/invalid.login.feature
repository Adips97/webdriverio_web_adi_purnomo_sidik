Feature: Login Feature

  Scenario: Invalid login with incorrect credentials
    Given I open the saucedemo website
    When I enter valid username <username> and password <password>
    Then I should see an error message <errorMessage>

    Examples:
      | username   | password       | errorMessage                                                              |
      | wrong_user | wrong_password | Epic sadface: Username and password do not match any user in this service |
