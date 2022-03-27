Feature: PowerApp - Listings
  PowerApp Test Automation

  Scenario: Search Listings
    Given I Launch The PowerApp Application
    Then I Should See The Investment Type Label
    When I Select "Listing" From The Investment Dropdown
    And I Enter "Global" In The Search Field
    Then Clicking On Search Button Should Display The Listing Results

  Scenario: Search Listings Invalid Test
    Given I Launch The PowerApp Application
    Then I Should See The Investment Type Label
    When I Select "Listing" From The Investment Dropdown
    And I Enter "fhhcfhfh" In The Search Field
    Then I Should See The Performance Error Message "No results found" For "fhhcfhfh"

  Scenario: Search Listings Special Characters
    Given I Launch The PowerApp Application
    Then I Should See The Investment Type Label
    When I Select "Listing" From The Investment Dropdown
    And I Enter "fdfdg@3254" In The Search Field
    Then I Should See The Performance Error Message "Search string can only contain letters, numbers and spaces" For "fdfdg@3254"