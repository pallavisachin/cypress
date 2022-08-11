/// <reference types="cypress" />

describe('conditional based intercept',function(){

it('test case for graphql in all todos',function(){
cy.intercept({
    method:"POST",
    url:"http://localhost:3000/"
}).as('alltodo')

cy.visit('http://localhost:1234/')
cy.wait('@alltodo').then(function({response}){
cy.log(response)
let completed= response.body.data.allTodos[0].completed
if(completed){
    cy.get('.todo').first().should('have.class','completed')
    cy.get('.todo').first().find('.toggle').click()
}
else{
    cy.get('.todo').first().should('not.have.class','completed')
    cy.get('.todo').first().find('.toggle').click()
}
})

})


})