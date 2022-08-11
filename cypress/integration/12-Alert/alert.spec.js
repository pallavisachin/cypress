/// <reference types="cypress" />

describe('verify alert the javascript', function () {
    it(" Tc-01 to check the normal  js alert", function () {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:alert', function (str) {
            expect(str).to.eq('I am a JS Alert')

        })
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', function () {
            return true
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })



    it(" Tc-02 verify the confirm js alert click on ok", function () {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm', function (str) {
            expect(str).to.eq('I am a JS Confirm')

        })
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', function () {
            return true
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })
    it("Tc-03 verify the confirm js alert click on cancel", function () {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm', function (str) {
            expect(str).to.eq('I am a JS Confirm')

        })
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', function () {
            return false
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    it("Tc-04 verify the prompt js alert click ", function () {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('I am checking alert metod in js')
            cy.contains('Click for JS Prompt').click()
        })
             cy.get('#result').should('contain', 'I am checking alert metod in js')
    })
    it.only(' Tc-05 verify the js confirm alert',function(){
        // Cypress.on('uncaught:exception', (err, runnable) => {              // to handle the uncaught exception
        //     return false
        // })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')       // we use the window to stub data in a confirm alert
        cy.window().then(function(win){
            cy.stub(win,'confirm').returns(true)
            cy.contains('Click for JS Confirm').click()
        })
        cy.get('#result').should('have.text','You clicked: Ok')

    })
    it.only(' TC -6 verify the js confirm alert',function(){
       
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(win){
            cy.stub(win,'confirm').returns(false)
            cy.contains('Click for JS Confirm').click()
        })
        cy.get('#result').should('have.text','You clicked: Cancel')


    })
})

