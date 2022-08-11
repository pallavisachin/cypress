import data from '../../fixtures/fixture3.json'

describe('import file t0 json', function () {



    data.forEach(function (el, index) {


        it(`fixture file use in before block - ${index}`, function () {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name ="first_name"]').type(el.first_name)
            cy.get('input[name ="last_name"]').type(el.last_name)
            cy.get('input[name ="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })
})