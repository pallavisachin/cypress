//const cypress = require("cypress")


describe("to learning the alerts ", function () {
    it("to verify the normal alerts", function () {
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('[id="OKTab"]>button').click()
        cy.on('window:alert', function (str) {
            expect(str).to.eql('I am an alert box!')
        })
    })
    it(" tc-02 to verify the confirm alerts", function () {
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('[ href="#CancelTab"]').click()
        cy.get('[id ="CancelTab"]>button').click()
        cy.on('window:confirm', function (str) {
            expect(str).to.include('Button')
            return true
        })
        cy.get('#demo').should('have.text', 'You pressed Ok')
    })
    it(" tc-03 to verify the confirm alerts", function () {
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('[ href="#CancelTab"]').click()
        cy.get('[id ="CancelTab"]>button').click()
        cy.on('window:confirm', function (str) {
            expect(str).to.include('Button')
            return false
        })
        cy.get('#demo').should('have.text', 'You Pressed Cancel')
    })

    it(" tc-04 to verify the PROMPT alerts", function () {
        cy.visit("https://demo.automationtesting.in/Alerts.html")

        cy.get('[href="#Textbox"]').click()
        // cy.get('[id="Textbox"]>button').click()
        cy.window().then(function (winobje) {
            cy.stub(winobje, 'prompt').returns('pallavi')
            return true
        })
        cy.get('[id="Textbox"]>button').click()
        cy.get('#demo1').should('contain', 'pallavi')
    })
    it(" tc-05 to handling the normal alerts", function () {
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('[id="OKTab"]>button').click()
        cy.window().then(function (winobj) {
            cy.stub(winobj, "alert").returns(true)
        })
    })
    it(" tc-06 to verify the confirm alerts", function () {
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('[ href="#CancelTab"]').click()
        cy.window().then(function (winobje) {
            cy.stub(winobje, 'confirm').returns(true)
        })
        cy.get('[id ="CancelTab"]>button').click()
        cy.get('#demo').should('have.text', 'You pressed Ok')
    })
    it(" tc-07 to verify the confirm alerts", function () {
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get('[ href="#CancelTab"]').click()
        cy.window().then(function (winobje) {
            cy.stub(winobje, 'confirm').returns(false)

        })

        cy.get('[id ="CancelTab"]>button').click()
        cy.get('#demo').should('have.text', 'You Pressed Cancel')
    })
})
