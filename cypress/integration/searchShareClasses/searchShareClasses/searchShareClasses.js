import {Then} from 'cypress-cucumber-preprocessor/steps';
import powerAppLocators from '../../locators/powerAppLocators.json'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Then('Clicking On Search Button Should Display The ShareClass Results', () => {
    cy.intercept(
        'GET',
        `https://pkycbn6yz2.execute-api.us-east-1.amazonaws.com/test/api/referencedata/shareclasses?q=Global&take=50&skip=0`
    ).as('searchShareClasses');
    cy.get(powerAppLocators.searchButton).should('exist');
    cy.get(powerAppLocators.searchButton).click();
    cy.wait('@searchShareClasses').then((intercept) => {
        let responseBody = intercept.response.body;
        expect(responseBody.data.length).to.eq(50);
        for(let i = 0; i< responseBody.data.length; i++){
            expect(responseBody.data[i].standardName.toLowerCase()).to.contain('global');
        }
    })
    cy.get('.table').should('exist');
})

Then('I Should See The Share Class Error Message {string} For {string}',(errorMessage, searchString) => {
    cy.intercept(
        'GET',
        `https://pkycbn6yz2.execute-api.us-east-1.amazonaws.com/test/api/referencedata/shareclasses?q=${searchString}&take=50&skip=0`
    ).as('searchShareClasses');
    cy.get(powerAppLocators.searchButton).should('exist');
    cy.get(powerAppLocators.searchButton).click();
    cy.wait('@searchShareClasses').then((intercept) => {
        expect(intercept.response.body.errors[0]).to.eq(errorMessage);
    });
    cy.get(powerAppLocators.errorMsgLabel).should('exist').invoke('text').then((msgLabel) => {
        expect(msgLabel).to.equal(errorMessage)
    });
})
