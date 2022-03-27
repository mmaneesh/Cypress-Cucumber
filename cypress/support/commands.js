// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import './oktaLogin';

// Cypress.Commands.add('loginWithOkta', () => {
//     const optionsSessionToken = {
//         method: 'POST',
//         url: 'https://OKTA_AUTH_URL/api/v1/authn',
//         body: {
//             username: YOURUSERNAME,
//             password: YOURPASSWORD,
//             options: {
//                 warnBeforePasswordExpired: 'true'
//             }
//         }
//     }
//     cy.request(optionsSessionToken).then((response) => {
//         const sessionToken = response.body.sessionToken;
//         cy.request({
//             method: 'GET',
//             url: 'https://OKTA_OAUTH2_URL/oauth2/default/v1/authorize?',
//             form: true,
//             followRedirect: false,
//             qs: {
//                 client_id: 'YOUR CLIENT ID',
//                 state: 'YOUR STATE TOKEN',
//                 nonce: 'YOUR NONCE TOKEN',
//                 redirect_uri: `REDIRECT_URL`,
//                 response_mode: 'fragment',
//                 response_type: 'id_token token',
//                 scope: 'YOUR SCOPE',
//                 sessionToken
//             }
//         })
//             .then((response) => {
//                 const urlWithToken = response.headers.location.toString();
//                 const accessToken_returned = urlWithToken
//                     .substring(urlWithToken.indexOf('access_token', 1000))
//                     .split('=')[1]
//                     .split('&')[0];
//
//                 const idToken_returned = urlWithToken
//                     .substring(urlWithToken.indexOf('id_token'))
//                     .split('=')[1]
//                     .split('&')[0];
//
//                 cy.fixture('okta-token-storage').then((storage) => {
//                     storage.idToken.idToken = idToken_returned;
//                     storage.accessToken.accessToken = accessToken_returned;
//                     window.localStorage.setItem('okta-token-storage', JSON.stringify(storage));
//                 });
//
//                 cy.fixture('persistroot.json').then((storage) => {
//                     window.localStorage.setItem('persist:root', JSON.stringify(storage));
//                 });
//
//                 cy.fixture('user.json').then((storage) => {
//                     window.localStorage.setItem('VALUE FOR USER OF YOUR APP', JSON.stringify(storage));
//                 });
//             });
//     });
// });


//
// Cypress.Commands.add('loginOkta', () => {
//     const optionsSessionToken = {
//         method: 'POST',
//         url: Cypress.env('session_token_url'),
//         body: {
//             username: Cypress.env('username'),
//             password: Cypress.env('password'),
//             options: {
//                 warnBeforePasswordExpired: 'true'
//             }
//         }
//     }
//
//     cy.request(optionsSessionToken).then(response => {
//         const sessionToken = response.body.sessionToken;
//         const qs = {
//             client_id: Cypress.env('client_id'),
//             code_challenge: Cypress.env('code_challenge'),
//             state: Cypress.env('state'),
//             nonce: Cypress.env('nonce'),
//             redirect_uri: Cypress.env('redirect_uri'),
//             code_challenge_method: 'S256',
//             response_mode: 'fragment',
//             response_type: 'code',
//             scope: ['openid', 'profile', 'email'],
//             sessionToken: sessionToken
//         }
//
//         cy.request({
//             method: 'GET',
//             url: Cypress.env('auth_token_url'),
//             form: true,
//             followRedirect: false,
//             qs: qs
//         }).then(responseWithToken => {
//             const redirectUrl = responseWithToken.redirectedToUrl;
//
//             const accessToken = redirectUrl
//                 .substring(redirectUrl.indexOf('access_token'))
//                 .split('=')[1]
//                 .split('&')[0];
//
//             cy.wrap(accessToken).as('accessToken');
//
//             cy.visit(redirectUrl).then(() => {
//                 cy.visit('/');
//             });
//         });
//     });
// })
//
// Cypress.Commands.add('oktaApiLogin', ({ email, password, url }) => {
//     const optionsSessionToken = {
//         method: 'POST',
//         url: `${Cypress.env('OKTA_DOMAIN')}/api/v1/authn`,
//         body: {
//             username: email,
//             password,
//             options: {
//                 warnBeforePasswordExpired: 'true',
//             },
//         },
//     };
//
//     cy.request(optionsSessionToken).then((response) => {
//         const { sessionToken } = response.body;
//         cy.log(`sessionToken: ${sessionToken}`);
//
//         const qs = {
//             response_type: 'code',
//             client_id: Cypress.env('OKTA_CLIENT_ID'),
//             state: 'test-state',
//             nonce: 'test-nonce',
//             redirect_uri: Cypress.env('OKTA_REDIRECT_URI'),
//             scope: 'openid offline_access email',
//             sessionToken,
//         };
//
//         cy.request({
//             method: 'GET',
//             url: `${Cypress.env('OKTA_DOMAIN')}/oauth2/${Cypress.env(
//                 'OKTA_AUTHORIZATION_SERVER_ID'
//             )}/v1/authorize`,
//             form: true,
//             followRedirect: false,
//             qs,
//         }).then((responseWithToken) => {
//             const redirectUrl = responseWithToken.redirectedToUrl;
//             cy.log('responseWithToken:', responseWithToken);
//             cy.log('redirectUrl:', redirectUrl);
//
//             cy.request({
//                 method: 'GET',
//                 url: redirectUrl,
//                 followRedirect: false,
//             });
//
//             cy.visit(url);
//         });
//     });
// });
