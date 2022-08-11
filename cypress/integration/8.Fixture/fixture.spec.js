// const cypress = require("cypress")
// const { it } = require("mocha")

describe('verify the contact us with different data', function () {
    it('same test with different data', function () {
        cy.fixture('user').then(function (res) {


            res.forEach(function(el) {
                cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('input[name ="first_name"]').type(el.firstname)
                cy.get('input[name ="last_name"]').type(el.lastname)
                cy.get('input[name ="email"]').type(el.email)
                cy.get('textarea[name="message"]').type(el.message)
                cy.get('input[type="submit"]').click()
                cy.get('h1').should('have.text', 'Thank You for your Message!')
            });
        })





    })
})
