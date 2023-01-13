Feature: End to End E-Commerce Validation

    application Regression
    @Regression
    Scenario: E-Commerce Products Order and Delivery
    Given I navigate to E-Commerce page
    When I add items to the cart
    #|productName|
    #|Blackberry |
    #|Nokia Edge |
    And Validate the total items and prices
    Then Select the country, submit and verify

    @Smoke
    Scenario: Filling E-Commerce form
    Given I navigate to E-Commerce page
    When I fill the form details
    |name   |gender |
    |Binta  |Female |
    Then Validate the details entered
    And Select the shop page