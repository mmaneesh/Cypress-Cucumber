Feature: PowerApp - Companies
  PowerApp Test Automation

  Scenario: Search Companies
    Given I Launch The PowerApp Application
    Then I Should See The Investment Type Label
    When I Select "Company" From The Investment Dropdown
    And I Enter "Global" In The Search Field
    Then Clicking On Search Button Should Display The Company Results

  Scenario: Search Companies Invalid Company Name
    Given I Launch The PowerApp Application
    Then I Should See The Investment Type Label
    When I Select "Company" From The Investment Dropdown
    And I Enter "fhhcfhfh" In The Search Field
    Then I Should See The Company Error Message "No results found" For "fhhcfhfh"

  Scenario: Search Companies Special Characters
    Given I Launch The PowerApp Application
    Then I Should See The Investment Type Label
    When I Select "Company" From The Investment Dropdown
    And I Enter "fdfdg@3254" In The Search Field
    Then I Should See The Company Error Message "Search string can only contain letters, numbers and spaces" For "fdfdg@3254"
