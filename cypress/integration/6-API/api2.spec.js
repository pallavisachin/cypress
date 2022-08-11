//const { support } = require("cypress/types/jquery")

//const { support } = require("cypress/types/jquery")

describe('verify the functionality of api', function () {
    it('verify the count of user via API', function () {

        cy.request({
            method: "GET",
            url: 'https://reqres.in/api/users?page=2'

        // }).then(function (response) {
        //     cy.log(response)
        }).then(function ({ status, headers, duration, body }) {
            cy.log(body)
        //    cy.log(status)
        //    cy.log(headers)
        //    cy.log(duration)
            
        //    expect(status).to.eql(200)
        //    expect(duration).to.within(10, 500)
        //    expect(body).to.have.keys(['data', 'page', 'per_page', 'support', 'total', 'total_pages'])

        //   expect(headers).to.have.property('cache-control', 'max-age=14400')
        //    body.data.forEach(element => {
        //        expect(element).to.have.keys(['id', 'first_name', 'last_name', 'email', 'avatar'])

        //    });
})
})

it('validate the POST API', function () {
    cy.request({
        method: "POST",
        url: "https://reqres.in/api/users",
        body: {
            "name": "pallavi",
            "job": "tester"
        }
    }).then(function ({body,status,statusText,headers}) {
        //cy.log(response)
       cy.log(body)
      expect(status).to.eql(201)
     let re= body.id
     cy.log(re)
        
    }).then(function(re){
        cy.request({
            method: "GET",
            url: `https://reqres.in/api/users${re}`
    }).then(function(response){
        cy.log(response)
    })
})
})
})