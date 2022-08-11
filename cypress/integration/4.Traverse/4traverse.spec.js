//const { it } = require("mocha")

//const { it } = require("mocha")

//const { should } = require("chai")
//const cypress = require("cypress")
///<reference types="cypress" />

describe('Traverse Method In Cypress ', function () {              // test scensrio in cypree
    it(' To get a DOM element at a specific index, use the .eq() command.', function ()                       // test cases in cypress
    {

        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').eq(3).should('have.text', 'Blackberries')
        cy.get('.traversal-food-list').find('li').eq(10).should('have.text', 'Lentils')
    })

    it('To get the first DOM element within elements, use the .first() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').first().should('have.text', 'Fruits')


    })
    it('To get the first DOM element within elements, use the .last() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').last().should('have.text', 'Lentils')
    })
    it('To get children of DOM elements, use the .children() command..', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length', 5)

    })


    it('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').next().should('have.text', 'Tea')

    })

    it('To get the previous sibling DOM element within elements, use the .prev() command', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prev().should('have.text', 'Espresso')
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').siblings().should('have.length', 5)

    })
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextAll().should('have.length', 10)

    })
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevAll().should('have.length', 6)

    })
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevUntil('.traversal-drinks-list').should('have.length', 4)

    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').nextUntil('#sugar').should('have.length', 4)

    })
    it('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').find('#coffee').should('have.text','Coffee')
    })

    it('To get the closest ancestor DOM element, use the .closest() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').closest('ul').should('have.class','traversal-food-list')
        cy.get('#veggie').closest('div').should('have.class','thumbnail')
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //cy.get('h2("Buttons & States")').filter('.thumbnail').should('have.text','Random Text')
        cy.get('.traversal-breadcrumb').children().filter('.active').should('have.text','Contact Us')
       
    })
    it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.btn-group-toggle').children('button').not('.active').should('have.length',3)
       
    })
    it.only('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //cy.get('.traversal-food-list').parents().filter('.traversal-job-list').should('have.length',0)
       // cy.get('.traversal-drinks-list').parents().should('have.length',5)
        
 })

})



