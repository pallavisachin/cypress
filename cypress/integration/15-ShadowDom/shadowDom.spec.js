/// <reference types="cypress" />

//const cypress = require("cypress")

describe('validate the shadow dom', function () {
    it(' TC-01 validate the normal input Textbox in a light dom', function () {
        cy.visit('http://127.0.0.1:5500/cypress/shadowDomindex.html')

        cy.get('#channelname').type('pallavi').should('have.value', 'pallavi')
    })
    it('TC-02 validate the shadow dom element', function () {
        cy.visit('http://127.0.0.1:5500/cypress/shadowDomindex.html')
        //cy.contains('I belong to Shadow DOM')       // here got error because i am not reach to the shadow dom
        cy.get('[onclick ="attachShadowDom()"]').click()
        // another way to click on button
        // cy.contains('Add Shadow DOM').click()
        cy.get('#shadowHost').shadow().find('h2').should('have.text', 'I belong to Shadow DOM')

    })

    it('TC-03 validate the input text box in shadow dom element', function () {
        cy.visit('http://127.0.0.1:5500/cypress/shadowDomindex.html')
        cy.get('[onclick ="attachShadowDom()"]').click()
        cy.get('#shadowHost').shadow().find('#name').type('sachin').should('have.value', 'sachin')

    })

    it('TC-04  test case 02 by using jquery validate the shadow dom element', function () {
        cy.visit('http://127.0.0.1:5500/cypress/shadowDomindex.html')
        //cy.contains('I belong to Shadow DOM')       // here got error because i am not reach to the shadow dom
        cy.get('[onclick ="attachShadowDom()"]').click()

        cy.get('#shadowHost').then(function (el) {
            // cy.log(el.get())                         // using get methos it get all  shadow documents
            let [dom] = el.get()
           
            expect(dom.shadowRoot.querySelector('h2').textContent).to.eql('I belong to Shadow DOM')       
                                                  
            
            // textcontent get html elemment text  // shadowroot is a inbuilt in method
        })


    })

    // it.only('TC-05 validate the shadow dom element BY using configuration change in cypress.json file', function () {             // in cypess.json file the setting od shadow dom is get true "includeShadowDom":true
    //     cy.visit('http://127.0.0.1:5501/cypress/index.html')                                                                       // this is risk bcoz he directily affect to the other test case so we use following case
    //     cy.contains('Add Shadow DOM').click()
    //     cy.get('h2').first().should('have.text','I belong to Shadow DOM')
       
    // })

    // it('TC-06 validate the shadow dom element', function () {
    //     cy.visit('http://127.0.0.1:5501/cypress/index.html')
    //     cy.contains('Add Shadow DOM').click()
    //     cy.get('h2',{includeShadowDom:true}).first().should('have.text','I belong to Shadow DOM')
       
    // })







})