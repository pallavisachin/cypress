// const cypress = require("cypress")
// const { it } = require("mocha")

describe("to check the login functionality",function(){

it("verify valid crendential",function(){
cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
cy.get('input[name="txtUsername"]').type('Admin')
cy.get('input[name="txtPassword"]').type('admin123')
cy.get('input[type="submit"]').click()
cy.get('h1').should('be.visible').and('have.text','Dashboard')
})


it.only("verify invalid crendential",function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
    cy.get('input[name="txtUsername"]').type('Admin')
    cy.get('input[name="txtPassword"]').type('admin12')
    cy.get('#btnLogin').click()
    cy.get('#spanMessage').should('be.visible').and('have.text','Invalid credentials')
    })
    


})