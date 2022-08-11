// const cypress = require("cypress")
// const { it } = require("mocha")

//const { expect } = require("chai")

//const { expect } = require("chai")

describe('to verify the graphql api', function () {
    it('to check the get ', function () {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: 'allTodos',
                query: `query allTodos { 
                allTodos{  
                 id 
                    title
                 completed 
                 __typename  
                     }
                    }`,
                variables: {}
            }
        }).then(function (res) {
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.isOkStatusCode).to.exist
            expect(true).to.be.true
            expect(res.headers).to.have.ownProperty('connection')
           
        })



    })

    //
    it('to check the add todo ', function () {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: 'AddTodo',
                query: `mutation AddTodo($title: String!) {
                createTodo(title: $title, completed: false) {
                  id
                  __typename
                }
              }`,
                variables: {
                    "title": "javascript"
                }
            }
        }).then(function (res) {
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.requestHeaders).to.have.property('Connection', "keep-alive")
            expect(res.allRequestResponses[0]).to.have.property('Request URL', 'http://localhost:3000/')
        })
    })
    //
    it('to update todo the get ', function () {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: 'allTodos',
                query: `query allTodos { 
            allTodos{  
             id 
                title
             completed 
             __typename  
                 }
                }`,
                variables: {}
            }
        }).then(function (res) {
            // cy.log(res)
            expect(res.status).to.eq(200)

            let id = res.body.data.allTodos[0].id
            return id
        }).then(function (id) {
            cy.request({
                method: "POST",
                url: "http://localhost:3000/",
                body: {
                    operationName: 'updateTodo',
                    query: `mutation updateTodo($id: ID!, $completed: Boolean!) {
                updateTodo(id: $id, completed: $completed) {
                  id
                  title
                  completed
                  __typename
                }
              }`,
                    variables: {
                        "id": `${id}`,
                        "title": "python",
                        "completed": true
                    }
                }
            }).then(function (res) {
                cy.log(res)
            })



        })

    })
    //
    it('to delete todo the get ', function () {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: 'allTodos',
                query: `query allTodos { 
            allTodos{  
             id 
                title
             completed 
             __typename  
                 }
                }`,
                variables: {}
            }
        }).then(function (res) {
            // cy.log(res)
            expect(res.status).to.eq(200)

            let id = res.body.data.allTodos[0].id
            return id
        }).then(function (id) {
            cy.request({
                method: "POST",
                url: "http://localhost:3000/",
                body: {
                    operationName: 'DeleteTodo',
                    query: `mutation DeleteTodo($id: ID!) {
                removeTodo(id: $id) {
                  id
                  __typename
                }
              }`,
                    variables: {
                        "id": `${id}`
                    }
                }
            }).then(function (res) {
                cy.log(res)
                expect(res.status).to.eq(200)
            })



        })

    })

})