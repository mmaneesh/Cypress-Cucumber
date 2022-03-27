Feature: PowerApp - Funds
  PowerApp Test Automation

  Scenario: Search Funds
    Given I Launch The PowerApp Application
    Then I Should See The Investment Type Label
    When I Select "Fund" From The Investment Dropdown
    And I Enter "Global" In The Search Field
    Then Clicking On Search Button Should Display The Fund Results

  Scenario: Search Funds Invalid Test
    Given I Launch The PowerApp Application
    Then I Should See The Investment Type Label
    When I Select "Fund" From The Investment Dropdown
    And I Enter "fhhcfhfh" In The Search Field
    Then I Should See The Fund Error Message "No results found" For "fhhcfhfh"

  Scenario: Search Funds Special Characters
    Given I Launch The PowerApp Application
    Then I Should See The Investment Type Label
    When I Select "Fund" From The Investment Dropdown
    And I Enter "fdfdg@3254" In The Search Field
    Then I Should See The Fund Error Message "Search string can only contain letters, numbers and spaces" For "fdfdg@3254"