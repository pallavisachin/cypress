/// <reference types="cypress" />

//const cypress = require("cypress")

//const cypress = require("cypress")

describe('verify the title ', function () {
    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/')
    })
    it('verify the title of page', function () {

        cy.document().then(function (doc) {     // document is a inbuilt in metthod
            cy.log(doc.title)
            expect(doc.title).to.eq('WebDriverUniversity.com')
        })
    })
    it('verify the title of page', function () {

        cy.title().then(function (str) {                              //title is inbuilt method
            expect(str).to.eql('WebDriverUniversity.com')
        })
    })
    it(' validate Height and Width of Page', function () {
        cy.document().then(function (doc) {
            let jquery = Cypress.$(doc)
            let h = jquery.height()
            let w = jquery.width()
            cy.log(h)
            cy.log(w)
        })
    })
    it('Validate Height and Width of Page', function () {
        cy.viewport('iphone-8', 'landscape')
        cy.viewport('iphone-5', 'portrait')
        cy.viewport(2000, 3000, 'portrait')
    })
    it('cookie in document', function () {
        cy.document().then(function (doc) {
            cy.log(doc.cookie)
            // setting the cookie
            let cookiee = doc.cookie = 'name=pallavi'
            cy.log(cookiee)
            // update  the cookie
           let p = doc.cookie = "name = sachin"
           cy.log(p)
           let p1 = doc.cookie = "name ="
           cy.log(p1)
        })
    })
    it.only('Cookie with document',function(){
        cy.setCookie('name','sachin')           //add the cookie
        cy.getCookie('name')
        cy.setCookie('name','sachin_b')         // update the cookie
        cy.getCookie('name')
         cy.clearCookie('name')                 // clear the cookie
    })

})
