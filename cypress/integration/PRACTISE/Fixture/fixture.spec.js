
// using import function here gives the path of file 
// syntax is import variablename from "path"
import obj from '../../../fixtures/prctfixture/fixture.json'



describe(" verify the fixtre in test cases", function () {
    // using the beforech block in this block gives the path of fixture file 
    let value = undefined
    beforeEach(function () {

        cy.fixture('/prctfixture/fixture').then(function (response) {
           value =  response 
        })
    })

    // globally define the object to pass the value
    let info = {
        username: "student",
        password: "Password123"

    }



    it('TC-01  to check functionality of the simple test case', function () {
        cy.visit('https://practicetestautomation.com/practice-test-login/')

        cy.get('[name="username"]').type('student')
        cy.get('[name="password"]').type('Password123')
        cy.get('#submit').click()
        cy.get('.post-title').should('have.text', "Logged In Successfully")

    })
    it('TC-02  to check functionality of the fixture usinf globally define  block', function () {
        cy.visit('https://practicetestautomation.com/practice-test-login/')

        cy.get('[name="username"]').type(info.username)
        cy.get('[name="password"]').type(info.password)
        cy.get('#submit').click()
        cy.get('.post-title').should('have.text', "Logged In Successfully")

    })
    it('TC-03  to check functionality of the fixture using fixture file ', function () {
        cy.fixture('/prctfixture/fixture').then(function (res) {
            cy.visit('https://practicetestautomation.com/practice-test-login/')
            cy.get('[name="username"]').type(res.username)
            cy.get('[name="password"]').type(res.password)
            cy.get('#submit').click()
            cy.get('.post-title').should('have.text', "Logged In Successfully")

        })
    })
    it('TC-04  to check functionality of the fixture using before each block', function () {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('[name="username"]').type(value.username)
        cy.get('[name="password"]').type(value.password)
        cy.get('#submit').click()
        cy.get('.post-title').should('have.text', "Logged In Successfully")

    })
    it.only('TC-05  to check functionality of the fixture using import function', function () {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('[name="username"]').type(obj.username)
        cy.get('[name="password"]').type(obj.password)
        cy.get('#submit').click()
        cy.get('.post-title').should('have.text', "Logged In Successfully")

    })
})