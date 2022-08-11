

//************************************orangehem login *********************************************************** */

// describe('to checking login the functinality in orangehrm ',function(){

// it('TC-01: to check valid crendential',function(){
// cy.visit('https://opensource-demo.orangehrmlive.com/')
// cy.get('input[ name="txtUsername"]').type('Admin')
// cy.get('input[ name="txtPassword"]').type('admin123')
// cy.get('input[ id="btnLogin"]').click()
// cy.url().should('contain','/index.php/dashboard')
// cy.get('h1').should('be.visible').and('have.text','Dashboard')
// })

// it.only('TC-01: to check Invalid crendential',function(){

//     cy.visit('https://opensource-demo.orangehrmlive.com/')
//     cy.get('input[ name="txtUsername"]').type('admi')
//     cy.get('input[ name="txtPassword"]').type('admin123')
//     cy.get('input[ id="btnLogin"]').click()
//     cy.get('#spanMessage').should('have.text','Invalid credentials')
// })

// })



//***************************************WEBDRIVE UNIVERCITY login form****************************************************/


describe("to checking the functionality login ", function () {

    it("to checking the valid crendential", function () {

        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('sachin')
        cy.get('input[name="last_name"]').type('Bhand')
        cy.get('input[name="email"]').type('pallavi0311996@gmail.com')
        cy.get('textarea[name="message"]').type('my first login form in cypress')

        cy.get('#form_buttons').find('input[value="SUBMIT"]').click()
        cy.get('h1').should('contain', 'Thank You for your Message!')
        cy.get('h1').should('contain', 'Thank')
        cy.get('[id="contact_reply"]>h1').should('contain', 'Thank ')


    })
    it("to checking the invalid crendential for email address", function () {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('sachin')
        cy.get('input[name="last_name"]').type('Bhand')
        cy.get('input[name="email"]').type('pallavi0311996gmail.com')
        cy.get('textarea[name="message"]').type('my first login form in cypress')
        cy.get('#form_buttons').find('input[value="SUBMIT"]').click()
        cy.get('body').should('be.visible',' Invalid email address')
        cy.url().should('contain','/contact_us.php')
})
it.only("to checking the reset button", function () {

    cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('input[name="first_name"]').type('sachin')
    cy.get('input[name="last_name"]').type('Bhand')
    cy.get('input[name="email"]').type('pallavi0311996@gmail.com')
    cy.get('textarea[name="message"]').type('my first login form in cypress')

         //reset 

    
        cy.get('input[name="first_name"]').should('have.text',"")
        cy.get('input[name="last_name"]').should('have.text',"")
        cy.get('input[name="email"]').should('have.text',"")
        cy.get('textarea[name="message"]').should('have.text',"")
         cy.get('#form_buttons').find('input[value="RESET"]').click()


})
})



