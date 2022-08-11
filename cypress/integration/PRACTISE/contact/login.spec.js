// const cypress = require("cypress")
// const { forEach } = require("cypress/types/lodash")
// const { beforeEach } = require("mocha")

//const { it } = require("mocha")



describe("to verify the sign up form in zoomin", function () {
    //Uncaught excep error-
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    beforeEach(function () {
        cy.visit('https://www.zoomin.com/sign-up')
    })



    it('to check the valid crendential', function() {
        cy.get('[name="name"]').type("pallavi")
        cy.get('input[name="email"]').type('pal@123')
        cy.get('[class="number-input"]').type(8975673408)
        cy.get('input[name="password"]').type("pal123")
         cy.contains('SIGN UP').click()
        cy.get('[class="smartbanner-title"]').should('be.visible','Install Zoomin App for better experience!')
    })



    it(' To check the  invalid name', function () {
        cy.visit("https://www.zoomin.com/sign-up")
        cy.get('[name="name"]').type('Pa')
        cy.get('input[type="text"]').eq(1).type('pal@gmail.com')
        cy.get('[class="number-input"]').type(7667899854)
        cy.get('[class="input-box"]').last().find('input').type('Priya123')
        cy.contains('SIGN UP').click()
        cy.get('[class="validation-message"]').should('be.visible').and('contain', 'Name must have minimum three characters.')
    })
    it(' To check the  invalid emailid', function () {
        cy.visit("https://www.zoomin.com/sign-up")
        cy.get('[name="name"]').type('Pal')
        cy.get('input[type="text"]').eq(1).type('palgmail.com')
        cy.get('[class="number-input"]').type(7667899854)
        cy.get('[class="input-box"]').last().find('input').type('Priya123')
        cy.contains('SIGN UP').click()
        cy.get('[class="Toastify__toast-body"]').should('be.visible', 'Please enter valid Email Address')
    })
    it('to check invalid mobile number',function(){
        cy.get('[name="name"]').type('pallavi')
        cy.get('[name="email"]').type('pal@gmail.com')
        cy.get('[class="number-input"]').type(567890987)
        cy.get('[name="password"]').type("sachpal")
        cy.contains('SIGN UP').click()
        cy.get('[role="alert"]').should('be.visible','Please enter valid mobile number')
    })
})


