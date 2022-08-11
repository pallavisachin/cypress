//const { it } = require("mocha")

//const { it } = require("mocha")

describe('to check the ui testing', function () {
    it('to check number of  todos', function () {
        cy.visit('http://localhost:1234/')
        cy.get('.todo').should('have.length', 3)
    })


    it('add todo to the list', function () {

        let text = 'python'
        cy.visit('http://localhost:1234/')
        cy.get('.new-todo').type(text)
        cy.get('.new-todo').type('{enter}')
        cy.wait(5000)
        cy.reload()
        cy.get('.todo').last().should('have.text', text)
    })

    it('update  todo to the list', function () {
        cy.visit('http://localhost:1234/')
        cy.get('.todo').first().find('div').find('input').click()
        cy.get('.todo').first('div').should('have.class', 'todo completed')

    })
    it.only('delete todo to the list', function () {
        cy.visit('http://localhost:1234/')
        cy.get('.destroy').first().click({ force: true })

    })
})