// import cypress from "cypress";
// import { describe } from "mocha";

//import cypress = require("cypress")



describe("",function(){

// Cypress.Commands.add('login_form',function(url,username,password){
// cy.visit('url')
// cy.get('[name="userId"]').type(username)
// cy.get('[name="userPassword"]').type(password)
// cy.get('input[ type="submit"]').click()
// })
it.only('tc-02',function(){
    cy.login_form('http://apt-public.appspot.com/testing-lab-login.html','sachin','sach123') 
})


    it('tc-01',function(){
        cy.visit('http://apt-public.appspot.com/testing-lab-login.html')
        cy.get('[name="userId"]').type('pal')
        cy.get('[name="userPassword"]').type(12345)
        cy.get('input[ type="submit"]').click()
        cy.get('body>h1').should('be.visible')
        cy.get('body>h1').should('have.text','Error: Server Error')
        cy.get('h2>p').should('be.visible')
        cy.get('h2>p').should('have.text','Please try again in 30 seconds.')
        cy.get('h2').should('contain','The server encountered an error and could not complete your request.')
        cy.get('h2').find('p').should('have.text','Please try again in 30 seconds.')
        cy.contains('Please try again in 30 seconds.').should('be.visible')
    })
})