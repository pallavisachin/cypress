//const cypress = require("cypress")

//const { expect } = require("chai")


//const cypress = require("cypress")


describe('login functionality using the custom commands', function () {
    Cypress.on('uncaught:exception', function () {
        return false
    })
    it('TC-01 with  valid crendential to login', function () {

        cy.login_form("https://www.zoomin.com/sign-up", 'pallavi', 'pal@123gmail.com', 8877665543, 'pal123')







        // this all code use in a support > command.js
        // Cypress.Commands.add('login_form', function (url, name, email, number, password) {
        //     cy.visit('https://www.zoomin.com/sign-up')
        //     cy.get('[name="name"]').type('pallavi')
        //     cy.get('[name="email"]').type('pallavi123@gmail.com')
        //     cy.get('[class="number-input"]').type(9876543210)
        //     cy.get('input[name="password"]').type('pallavi')
        //     cy.contains('SIGN UP').click()
    })
    it('tc-02 with valid credential',function(){
        cy.login("https://www.saucedemo.com/",'standard_user','secret_sauce')
        cy.login("https://www.saucedemo.com/",'problem_user','secret_sauce')
         cy.login("https://www.saucedemo.com/",'performance_glitch_user','secret_sauce')
            //     cy.visit("https://www.saucedemo.com/")
            //     cy.get('#user-name').type('problem_user')
            //     cy.get('#password').type('secret_sauce')
            //     cy.get('#login-button').click()
            //   })  
    } )
    it.only('tc-02 with valid credential',function(){
        cy.visit("https://www.saucedemo.com/")
            cy.get('#user-name').type('problem_user')
            cy.get('#password').type('secret_sauce')
            cy.get('#login-button').click()
            cy.contains('Products').should('have.text','Products')
            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('.shopping_cart_badge').click()
            cy.get('.shopping_cart_badge').should('have.length',1)
            //cy.get('.inventory_item_price').should('be.visible',29.99)
            cy.get('.inventory_item_price').should('be.visible')
            //cy.contains('Your Cart').should()
        //cy.get('#checkout').should('be.visible','Checkout')
})
})

