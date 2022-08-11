//const { contains } = require("cypress/types/jquery")



describe("verify functionality in contact us form", function () {

    beforeEach(function () {

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible').and('have.text', 'CONTACT US')
    })

    it("to checking the the functionality in contactus form for submit button", function () {

        cy.get('input[name="first_name"]').type("pallavi")
        cy.get('input[name="last_name"]').type("bhand")
        cy.get('input[name="email"]').type('pallavi0311996@gmail.com')
        cy.get('textarea[name="message"]').type('my first login form in cypress')
        cy.get('input[value="SUBMIT"]').click()
        //cy.get('h1').should('have.text','Thank You for your Message!')
        cy.get('h1').should('contain', 'Thank')

    })


    it.only('to checking the functionality in contactus form for invalid emailid', function () {

        cy.get('input[name="first_name"]').type("pallavi")
        cy.get('input[name="last_name"]').type("bhand")
        cy.get('input[name="email"]').type('pallavi0311996gmail.com')
        cy.get('textarea[name="message"]').type('my first login form in cypress')
        cy.get('input[value="SUBMIT"]').click()
        //cy.get('body').should('have.text', 'Invalid email address')         // IT NOT WORK
         cy.get('body').should('contain', 'Invalid email address')
    })
    it('to checking the functionality in contactus form   for reset button', function () {

        it('to check the functionality in contactus form  reset button', function () {
            cy.get('input[name="first_name"]').type("pallavi")
            cy.get('input[name="last_name"]').type("bhand")
            cy.get('input[name="email"]').type('pallavi0311996gmail.com')
            cy.get('textarea[name="message"]').type('my first login form in cypress')
            cy.get('input[value="RESET"]').click()


            // reset area
            cy.get('input[name="first_name"]').should('have.text', "")
            cy.get('input[name="last_name"]').should('have.text', "")
            cy.get('input[name="email"]').should('have.text', "")
            cy.get('textarea[name="message"]').should('have.text', "")
            cy.get('input[value="RESET"]').click()




        })


    })




})