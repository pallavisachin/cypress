//const { it } = require("mocha")

//import { beforeEach } from "mocha"

//const cypress = require("cypress")
import obj1 from "../../fixtures/contactus.json"
describe("verify functionality for contactus form", function () {

let data = undefined
    beforeEach(function () {
        cy.fixture('contactus').then(function (resp) {
            data = resp
        })
    })



let value = {
        first_name: "sachin",
        last_name: "Bhand",
        email: "sachin@123gmail.com",
        message: " trying to learn cypress automation"
    }



    it('verify the functionality', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name ="first_name"]').type('sachin')
        cy.get('input[name ="last_name"]').type('bhand')
        cy.get('input[name ="email"]').type('sachin@123gmail.com')
        cy.get('textarea[name="message"]').type('cheking fixture ')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
        //cy.get('h1').should('contain', 'Thank you')

    })


    it('verify the functionality using globally define object', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name ="first_name"]').type(value.first_name)
        cy.get('input[name ="last_name"]').type(value.last_name)
        cy.get('input[name ="email"]').type(value.email)
        cy.get('textarea[name="message"]').type(value.message)
        cy.get('input[type="submit"]').click()
        //cy.get('h1').should('have.text', 'Thank You for your Message!')
        cy.get('h1').should('contain', 'Thank')

    })

    it('verify the functionality using fixture file object', function () {
        cy.fixture('contactus').then(function (response) {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name ="first_name"]').type(response.first_name)
            cy.get('input[name ="last_name"]').type(response.last_name)
            cy.get('input[name ="email"]').type(response.email)
            cy.get('textarea[name="message"]').type(response.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('contain', 'Thank')

        })
    })
    it('verify the functionality using fixture file object in before each block', function () {

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name ="first_name"]').type(data.first_name)
        cy.get('input[name ="last_name"]').type(data.last_name)
        cy.get('input[name ="email"]').type(data.email)
        cy.get('textarea[name="message"]').type(data.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('contain', 'Thank')

    })

    it.only('verify the functionality using fixture file object in before each block', function () {

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name ="first_name"]').type(resp.first_name)
        cy.get('input[name ="last_name"]').type(resp.last_name)
        cy.get('input[name ="email"]').type(resp.email)
        cy.get('textarea[name="message"]').type(resp.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('contain', 'Thank')

    })

    it('verify the contact us form from fixture - Import', function () {

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name ="first_name"]').type(obj1.first_name)
        cy.get('input[name ="last_name"]').type(obj1.last_name)
        cy.get('input[name ="email"]').type(obj1.email)
        cy.get('textarea[name="message"]').type(obj1.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('contain', 'Thank')

    })


})
