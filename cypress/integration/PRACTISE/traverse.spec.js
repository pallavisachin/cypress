
///<reference types="cypress" />

//const { eq } = require("cypress/types/lodash")

//const { find } = require("cypress/types/lodash")

describe('traverse method in a lonavalacab url', function () {
    beforeEach(function () {
        cy.visit('https://www.lonavalacab.com/')
    })

    it('to eq() method', function () {
        cy.get('.navbar-nav.ml-auto').children('li').eq(1).should('have.text', 'sights')
        cy.get('.navbar-nav.ml-auto').children().eq(1).should('have.text', 'sights')
    })

    it('to first() method ', function () {
        cy.get('.navbar-nav.ml-auto').find('li').first().should('have.text', 'Packages')
        cy.get('.navbar-nav.ml-auto').find('li').first().should('contain', 'Packages')
        cy.get('.navbar-nav.ml-auto').children('li').first().should('contain', 'Packages')
    })


    it('to last() method ', function () {
        cy.get('.navbar-nav.ml-auto').find('li').last().should('have.text', 'Blog')
        cy.get('.navbar-nav.ml-auto').find('li').last().should('contain', 'Blog')
        cy.get('.navbar-nav.ml-auto').find('li').last().should('be.visible', 'Blog')
        cy.get('.navbar-nav.ml-auto').children('li').last().should('contain', 'Blog')
    })

    it('to children() method ', function () {
        cy.get('.navbar-nav.ml-auto').children().should('have.length', 6)
        cy.get('.nav-item a ').children().should('have.length', 0)
    })

    it('to .next() method ', function () {
        cy.get('.navbar-nav.ml-auto').find('li').next().should('have.length', 5)
        // cy.get('.navbar-nav.ml-auto').find('li').first().next().should('have.text','sights')

    })

    it('to .prev ()  method ', function () {

        cy.get('.navbar-nav.ml-auto').children('li').last().prev().should('have.text', 'FAQ')
        cy.get('.navbar-nav.ml-auto').children('li').eq(4).prev().should('have.text', 'Contact')

    })
         it('To  .siblings() command.', function () {
         cy.get('.nav-item a ').siblings().should('have.length', 0)

    })

        it('To  .nextAll() command.', function () {
         cy.get('.navbar-nav.ml-auto').children().nextAll().should('have.length',5)

    })
    it('To  .prevAll() command.', function () {
        cy.get('.navbar-nav.ml-auto').prevAll().should('have.length',0)
        cy.get('.navbar-nav.ml-auto ').children('li').eq(4).prevAll().should('have.length',4)

    })

  
    it('to .find() method ', function () {
        cy.get('.navbar-nav.ml-auto').find('li').should('have.length', 6)
    })


    // it.only('to .closest() method ', function () {
    //     cy.get('div[id="mainNav"]').closest('nav').should('have.attr, "class","navbar navbar-expand-lg.narbar-light"')
    // })


    it.only('To get parents DOM element of elements, use the .parents() command.',function(){
        
        cy.get('.navbar-nav.ml-auto').parents().should('have.length',7)
        cy.get('.navbar-nav.ml-auto').parents().should('match', 'div')
    
   
    })

})