import object from '../../fixtures/contactus.json'
import {obj1} from '../../fixtures/contactus'
import {obj2} from '../../fixtures/contactus'

describe("fixture file use in different ways", function () {
    let data
    before(() => {
        cy.fixture('contactus').then((res) => {
            //cy.log(res)
            data = res
        })
    })

    it("fixture file use in before block", function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name ="first_name"]').type(data.first_name)
        cy.get('input[name ="last_name"]').type(data.last_name)
        cy.get('input[name ="email"]').type(data.email)
        cy.get('textarea[name="message"]').type(data.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })


    it("fixture file use in perticular test case", function () {
        cy.fixture('contactus').then((data) => {
            cy.log(data)
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name ="first_name"]').type(data.first_name)
            cy.get('input[name ="last_name"]').type(data.last_name)
            cy.get('input[name ="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })
 it("fixture file use in import function in json file", function () {
    cy.log(object)
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name ="first_name"]').type(object.first_name)
        cy.get('input[name ="last_name"]').type(object.last_name)
        cy.get('input[name ="email"]').type(object.email)
        cy.get('textarea[name="message"]').type(object.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
    it.only("fixture file use in import  function in js file", function () {
        cy.log(obj1)
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name ="first_name"]').type(obj1.firstname)
        cy.get('input[name ="last_name"]').type(obj1.lastname)
        cy.get('input[name ="email"]').type(obj1.email)
        cy.get('textarea[name="message"]').type(obj1.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
    it.only("fixture file use in import  function in js file", function () {
        cy.log(obj2)
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name ="first_name"]').type(obj2.firstname)
        cy.get('input[name ="last_name"]').type(obj2.lastname)
        cy.get('input[name ="email"]').type(obj2.email)
        cy.get('textarea[name="message"]').type(obj2.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
})



