
import info from "../../fixtures/user.json"
describe("verify the data from different test case",function(){

info.forEach(function(el,index){
    it(`verify the contact us form with test-data ${index+1}`, function () {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('input[name ="first_name"]').type(el.firstname)
    cy.get('input[name ="last_name"]').type(el.lastname)
    cy.get('input[name ="email"]').type(el.email)
    cy.get('textarea[name="message"]').type(el.message)
    cy.get('input[type="submit"]').click()
    cy.get('h1').should('have.text', 'Thank You for your Message!')



})
})

})