//import cypress from 'cypress'
import data from '../../fixtures/userapi.json'

describe('use fixture file for data create',function(){

data.forEach(function(element,index){
    it(`verify the test data for creation ${index+1}`,function(){


cy.request({
    method :"POST",
    url:"https://reqres.in/api/users",
    body:element

}).then(function(response){
    expect(response.status).to.eql(201)
})


    })
})





})