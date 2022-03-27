import {Then} from 'cypress-cucumber-preprocessor/steps';
import powerAppLocators from '../../locators/powerAppLocators.json'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Then('Clicking On Search Button Should Display The Company Results', () => {
    cy.intercept(
        'GET',
        `https://4fed905emg.execute-api.us-east-1.amazonaws.com/dev/api/referencedata/companies?q=Global&take=50&skip=0`
    ).as('searchCompanies');
    cy.get(powerAppLocators.searchButton).should('exist');
    cy.get(powerAppLocators.searchButton).click();
    cy.wait('@searchCompanies').then((intercept) => {
        let responseBody = intercept.response.body;
        expect(responseBody.data.length).to.eq(50);
        for(let i = 0; i< responseBody.data.length; i++){
            expect(responseBody.data[i].standardName.toLowerCase()).to.contain('global');
        }
    })
    cy.get('.table').should('exist');
})

Then('I Should See The Company Error Message {string} For {string}',(errorMessage, searchString) => {
    cy.intercept(
        'GET',
        `https://4fed905emg.execute-api.us-east-1.amazonaws.com/dev/api/referencedata/companies?q=${searchString}&take=50&skip=0`
    ).as('searchCompany');
    cy.get(powerAppLocators.searchButton).should('exist');
    cy.get(powerAppLocators.searchButton).click();
    cy.wait('@searchCompany').then((intercept) => {
        expect(intercept.response.body.errors[0]).to.eq(errorMessage);
    });
    cy.get(powerAppLocators.errorMsgLabel).should('exist').invoke('text').then((msgLabel) => {
        expect(msgLabel).to.equal(errorMessage)
    });
})
