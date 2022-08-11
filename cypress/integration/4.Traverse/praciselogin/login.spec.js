//const { describe } = require("mocha");

// const { type } = require("cypress/types/jquery")
// const { it } = require("mocha")
///<reference types="cypress" />
// const { should } = require("chai")
// const cypress = require("cypress")

//const { it } = require("mocha")

describe('To checking login functionality in practisetest automation example', () => {

    it.only('to checking valid login details', function () {

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
        //cy.get('.post-title').should('be.visible').and('have.text', 'Logged In Successfully')
        cy.url().should('contain','/logged-in-successfully/')          // different ways to assert the function
        
    })


//     it('to checking invalid login details for username',function(){
//        cy.visit('https://practicetestautomation.com/practice-test-login/')
//         cy.get('#username').type('stud')
//         cy.get('#password').type('Password123')
//         cy.get('#submit').click()
//         cy.get('.show').should('be.visible').and('have.text','Your username is invalid!')

//     })
//     it.only('to checking invalid login details for password',function(){
//         cy.visit('https://practicetestautomation.com/practice-test-login/')
//          cy.get('#username').type('student')
//          cy.get('#password').type('Password')
//          cy.get('#submit').click()
//         // cy.get('.show').should('be.visible').and('have.text','Your password is invalid!')
//          cy.get('.show').should('contain','password')                                        // different ways to assert the function
 
//      })

 })