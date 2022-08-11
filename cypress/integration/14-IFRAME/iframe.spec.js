//const cypress = require("cypress")
/// <reference types="cypress" />

describe('verift the iframe in cypress', function () {

    let getIframeBody = function (id) {
        return cy.get(`#${id}`)
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
    }
    it('verify the iframe using javascript', function () {
        cy.visit("http://webdriveruniversity.com/IFrame/index.html")
        cy.get('#frame').then(function (iframe) {                                              // in a html file here iframe is there so we can not directly get elemet so we firstly find out the iframe
            //cy.log(iframe)
            let bodye = iframe[0].contentDocument.body
            cy.wrap(bodye).as("body")
            cy.get('@body').find('a[href="index.html"]').should('have.text', 'Home')
        })

    })
    it('verify the iframe using jquery', function () {
        // ifram tagName -----> contents(document) ------> body ----> wrap----findElement
        cy.visit("http://webdriveruniversity.com/IFrame/index.html")
        cy.get('#frame').then(function ($iframe) {                                              // in a html file here iframe is there so we can not directly get elemet so we firstly find out the iframe
            let bodye = $iframe.contents().find('body')
            cy.wrap(bodye).as("body")                                                           // in jquery here contents are inbuilt to find the body
            cy.get('@body').find('a[href="index.html"]').should('have.text', 'Home')
        })
    })
    it.only('verify the iframe using utility function', function () {
        cy.visit("http://webdriveruniversity.com/IFrame/index.html")
        getIframeBody('frame').then(function (body) {                                              // in a html file here iframe is there so we can not directly get elemet so we firstly find out the iframe

            cy.wrap(body).as("bdy")
            cy.get('@bdy').find('a[href="index.html"]').should('have.text', 'Home')




        })

    })
})