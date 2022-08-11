///<reference types="cypress"/>
//const { beforeEach } = require("mocha")

//const { it } = require("mocha")

//const cypress = require("cypress")

describe("to check the checkbox and radio functionality", function () {
    beforeEach(function () {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
    })
    //------------------------BY using check---------------------------------------
    it(' case :1 to check the checkbox by using "check" method', function () {
        cy.get('input[value="red"]').check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(2).check().should('be.checked')
        cy.get('input[value="red"]').uncheck().should('not.be.checked')
    })
//------------------------BY using click---------------------------------------
    it('case:2 to check the checkbox by using "click" method', function () {
        cy.get('input[value="purple"]').click().should('be.checked')
        cy.get('input[type="checkbox"]').eq(2).click().should('be.checked')
        cy.get('input[value="purple"]').click().should('not.be.checked')
    })
    it(' case :3 to check the checkbox by using "check" by multiple checkbox method', function () {
        cy.get('input[type="checkbox"]').each(function (el, array) {
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })
    it(' case :4 to check the checkbox by using "check" by multiple checkbox method', function () {
        cy.get('input[type="checkbox"]').check(['red', 'yellow', 'blue', 'orange', 'green', 'purple'])
        cy.get('input[type="checkbox"]').uncheck(['red', 'yellow', 'blue', 'orange', 'green', 'purple'])

    })

    it('case : 5 to check the radio button with "click" ', function () {
        cy.get('[type ="radio"]').first().click().should('be.checked')
        cy.contains(' Internet Explorer').should('not.be.checked')
    })

    it('case : 6 to check the radio button with "check" ', function () {
        cy.get('[type ="radio"]').first().check().should('be.checked')
        cy.contains(' Internet Explorer').should('not.be.checked')
    })

    it.only('case : 7 to check the functionality of all radio button', function () {
        cy.get('input[type ="radio"]').each(function (el, index) {
            cy.wrap(el).click().should('be.checked')
            cy.wrap(el).check().should('be.checked')
        })
    })
})