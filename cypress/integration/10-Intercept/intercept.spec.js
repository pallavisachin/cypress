/// <reference types="cypress" />
import payload from '../../fixtures/intercept.json'

describe('verify the intercept concept', function () {
    it('verify the get commnet functionality ', function () {
        cy.intercept({
            "method": "GET",
            "url": "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getcomment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getcomment')
        cy.get('.network-comment').should('contain', 'enim')



    })


    it('verify the get commnet functionality ', function () {
        cy.intercept({
            "method": "GET",
            "url": "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getcomment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getcomment').then(function ({ response, request }) {
            cy.log(response)
            //cy.log(request)
            expect(response.statusCode).to.eql(200)
            expect(response.body.id).to.eql(1)
            cy.get('.network-comment').should('have.text', response.body.body)

        })

    })


    it('verify the post commnet functionality ', function () {
        cy.intercept({
            "method": "POST",
            "url": "https://jsonplaceholder.cypress.io/comments"
        }).as('postcomment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postcomment').then(function ({ response, request }) {
            //cy.log(response)
            //cy.log(request)
            expect(response.statusCode).to.eql(201)
            expect(response.body.id).to.eql(501)
            cy.get('.network-post-comment').should('have.text', 'POST successful!')

        })

    })

    it('verify the update commnet functionality ', function () {
        cy.intercept({
            "method": "PUT",
            "url": "https://jsonplaceholder.cypress.io/comments/1"
        }).as('updatecomment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@updatecomment').then(function ({ response, request }) {
            //cy.log(response)
            //cy.log(request)
            expect(response.statusCode).to.eql(200)
        
           })
 })



it('Verify the getcomment APIwith stubbed data:body  using fixture',function(){
    cy.intercept({
        method:"GET",
        url:"https://jsonplaceholder.cypress.io/comments/1"

    },
    {

    statusCode:200,
    body:{
        "postId": 7,
        "language": "marathi",
        "id": 25,
        "name": "sachin bhand",
        "email": "sachin@123gmail.com",
        "body": "Minskole Institude"

    }

}).as('getcomment')
cy.visit('https://example.cypress.io/commands/network-requests')
cy.contains('Get Comment').click()
cy.wait('@getcomment')

})
it('Verify the getcomment APIwith stubbed data:body  using fixture',function(){
    cy.intercept({
        method:"GET",
        url:"https://jsonplaceholder.cypress.io/comments/1"

    },
    {

    statusCode:200,
    body:payload

}).as('getcomment')
cy.visit('https://example.cypress.io/commands/network-requests')
cy.contains('Get Comment').click()
cy.wait('@getcomment')


})
it.only('Verify the getcomment APIwith stubbed data:body  using status code',function(){
    cy.intercept({
        method:"GET",
        url:"https://jsonplaceholder.cypress.io/comments/1"

    },
    {

    statusCode:404,
    

}).as('getcomment')
cy.visit('https://example.cypress.io/commands/network-requests')
cy.contains('Get Comment').click()
cy.wait('@getcomment')


})
})