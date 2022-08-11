// import cypress from "cypress"
// import { it } from "mocha"

describe('writing to the fixture file ',function(){
    it('verify the writing to fixture file',function(){
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function(res){
            cy.writeFile('cypress/fixtures/userwrite.json',res.body)
        })
        cy.fixture('userwrite').then(function(res){
            //expect(res.body.length)
        })
    })

})