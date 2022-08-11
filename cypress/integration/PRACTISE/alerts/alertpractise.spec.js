// const cypress = require("cypress");
// const { describe } = require("mocha");

describe('to learn simple alert and confirm alert', function () {
    it('to check the simple alert', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.on('window:alert', function (str) {
            expect(str).to.eq('Hello , share this practice page and share your knowledge')
        })
        cy.get('#alertbtn').click()
        cy.on('window:alert', function () {
            return true
        })

    })
    it('to check the confirm alert', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.on('window:confirm', function (str) {
            expect(str).to.eq('Hello , Are you sure you want to confirm?')
        })
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', function () {
            return true
        })

    })
})