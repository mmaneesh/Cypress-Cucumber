Feature: PowerApp - Share Class
  PowerApp Test Automation

  Scenario: Search Share Class
    Given I Launch The PowerApp Application
    Then I Should See The Investment Type Label
    When I Select "Share Class" From The Investment Dropdown
    And I Enter "Global" In The Search Field
    Then Clicking On Search Button Should Display The ShareClass Results

  Scenario: Search Share Class Invalid Test
    Given I Launch The PowerApp Application
    Then I Should See The Investment Type Label
    When I Select "Share Class" From The Investment Dropdown
    And I Enter "fhhcfhfh" In The Search Field
    Then I Should See The Share Class Error Message "No results found" For "fhhcfhfh"

  Scenario: Search Share Class Special Characters
    Given I Launch The PowerApp Application
    Then I Should See The Investment Type Label
    When I Select "Share Class" From The Investment Dropdown
    And I Enter "fdfdg@3254" In The Search Field
    Then I Should See The Share Class Error Message "Search string can only contain letters, numbers and spaces" For "fdfdg@3254"