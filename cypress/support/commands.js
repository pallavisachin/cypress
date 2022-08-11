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


Cypress.Commands.add('login_form', function (url, name, email, number, password) {
    cy.visit(url)
    cy.get('[name="name"]').type(name)
    cy.get('[name="email"]').type(email)
    cy.get('[class="number-input"]').type(number)
    cy.get('input[name="password"]').type(password)
    cy.contains('SIGN UP').click()
    cy.get('[class="smartbanner-title"]').should('be.visible','Install Zoomin App for better experience!')
})

Cypress.Commands.add('login',(url,username,passward)=>{
    cy.visit(url)
    cy.get('#user-name').type(username)
    cy.get('#password').type(passward)
    cy.get('#login-button').click()

  })

  Cypress.Commands.add('login_form',function(url,username,password){
    cy.visit(url)
    cy.get('[name="userId"]').type(username)
    cy.get('[name="userPassword"]').type(password)
    cy.get('input[ type="submit"]').click()
    })