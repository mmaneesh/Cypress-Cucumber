import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import powerAppLocators from "../locators/powerAppLocators.json";

Given('I Launch The PowerApp Application', () => {
    cy.visit('https://uxipd1wtje.execute-api.us-east-1.amazonaws.com/dev/investment/search');
});

Then('I Should See The Investment Type Label', () => {
    cy.get(powerAppLocators.investmentTypeLabel).should('exist').invoke('text').then((label) => {
        expect(label).to.contain('Investment')
    });
});

When('I Select {string} From The Investment Dropdown', (investmentTypeValue) => {
    cy.get(powerAppLocators.investmentTypeDropdown).should('exist');
    switch (investmentTypeValue) {
        case 'Company' :
            cy.get(powerAppLocators.investmentTypeDropdown).select('Company');
            break;
        case 'Fund':
            cy.get(powerAppLocators.investmentTypeDropdown).select('Fund');
            break;
        case 'Share Class':
            cy.get(powerAppLocators.investmentTypeDropdown).select('Share Class');
            break;
        case 'Listing':
            cy.get(powerAppLocators.investmentTypeDropdown).select('Listing');
            break;
        default:
            cy.log('Please Enter A Valid Investment Type"');
    }
});

And('I Enter {string} In The Search Field', (searchValue) => {
    cy.get(powerAppLocators.investmentTypeSearchBox).should('exist');
    cy.get(powerAppLocators.investmentTypeSearchBox).click().type(searchValue);
})
