Feature: DataGuard TODO List

  Scenario: View the list of TODOs
    Given I open the TODO list
    Then I should see the "DataGuard TODO List Challenge" page title

  Scenario: Add items to the TODO list
    Given I open the TODO list
    When I submit my "Web E2E automation" item
    When I submit my "Create test plan" item
    When I submit my "Create test cases" item
    When I submit my "Regression test" item
    Then I verify the added "Web E2E automation" item

  Scenario: Modify items from the TODO list
    Given I open the TODO list
    When I verify the added "Web E2E automation" item
    Then I edit the item

  Scenario: Remove items from the TODO list
    Given I open the TODO list
    Then I remove the items

