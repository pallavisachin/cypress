// const cypress = require("cypress")
// const { it } = require("mocha")

describe('verify the functionality count of user', function () {
    beforeEach(function(){
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts"

        },
        {
            body:{firstname:"pallavi"}
        }).as('getusers')
    })
    it('verify the tptal no of users',function () {

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.contains('/posts').click()
        cy.wait('@getUsers').then(function({response,request}){
            //cy.log(res)
            expect(response.statusCode).to.eq(200)
        })
        cy.get('@getusers').then(function({response}) {
            //cy.log(response)
            expect(response.body.length).to.eql(100)
        })


    })


    it.only('verify the total number of user',function(){

        cy.intercept('GET','https://jsonplaceholder.typicode.com/posts',{fixture:"intercept"}).as('getUsers')
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.contains('/posts').click()
        cy.wait('@getUsers').then(function({response,request}){
           expect(response.statusCode).to.eq(200)
        })
        cy.get('@getUsers').then(function({response}){
            //cy.log(response)
            //expect(response.body.length).to.eqls(100)
        })
})
})