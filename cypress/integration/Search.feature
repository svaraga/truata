@search @smoke
Feature: Validate search functionality

  Scenario Outline: Search should return <productsash>

    Given user is on homepage
    When user search for '<searchitem>'
    Then the first item returned should be marked as '<productsash>'
    And the name should be '<searchitem>'
    And price should be '<price>'

    Examples:
      | searchitem            | productsash     | price |
      | Two Night Hotel Break | No 1 Bestseller | £99   |

  Scenario Outline: Add search item to checkout

    Given user is on homepage
    When user search for '<searchitem>'
    And user click on search item '<productsash>'
    Then the product name should be '<searchitem>'
    And product price should be '<price>'
    When user click on 'Buy now'
    Then payment total should be '<paymenttotal>'
    When user goes to checkout page
    Then order total should be '<paymenttotal>'

    Examples:
      | searchitem            | productsash     | price | paymenttotal |
      | Two Night Hotel Break | No 1 Bestseller | £99   | £100.99      |


