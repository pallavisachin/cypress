// const cypress = require("cypress")
// const { it } = require("mocha")

//const { find, eq } = require("cypress/types/lodash")

//const { it } = require("mocha")

//const { eq } = require("cypress/types/lodash")

describe("verify the functionality radio button and drop down ", function () {
    beforeEach(function () {
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('h1').should('be.visible', 'Dropdown Menu(s), Checkboxe(s) &amp; Radio Button(s)')
    })

    it("to checking the functionality of check box function", function () {
        cy.get('input[value="option-3"]').check().should('be.checked')
    })

    it('verify the functionality for the checkbox with ', function () {
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.get('input[value="option-1"]').click().should('be.not.checked')
    })

    it('verify the functionality  to mutiple checkboxes ', function () {
        cy.get('#checkboxes').find('input[type="checkbox"]').each(function (el) {
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })

     it('verify the functionality  to mutiple checkboxes ', function () {
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4'])
        cy.get('input[type="checkbox"]').uncheck(['option-1','option-2','option-3','option-4'])
    })
    it('verify the functionality for radio  with check()', function () {
        cy.get('input[value="blue"]').check().should('be.checked')
        cy.get('input[value="purple"]').should('not.be.checked')
    })

    it('verify the functionality for all the radio buttons', function () {
        cy.get('#radio-buttons').find('input').each(function (el, index) {
            cy.wrap(el).check().should('be.checked')
        })
        cy.get('#radio-buttons').last().should('not.be.checked')
    })
    it('to check the functionality of drop down the menu',function(){
        cy.get('.section-title>#dropdowm-menu-1').select('SQL').should('have.value','sql')
        cy.get('#dropdowm-menu-2').select('JUnit').should('have.value','junit')
    })
    it('verify the selection for all the dropdown',function(){
        let selectvalues=['java','testng','javascript']
        cy.get('.section-title').first().children().each(function(el,index){
            cy.wrap(el).select(selectvalues[index]).should('have.value',selectvalues[index])
         })
        })
        it('verify the functionality to check whether the element is enabled or disable',function(){
            cy.get('input[name="vegetable"').eq(1).should('be.disabled')
            cy.get('#fruit-selects').select('Apple').should('have.value','apple')
        })
        it.only('verify whether the drop down value is disabled',function(){

           // cy.get('#fruit-selects').children() .filter('option[disabled="disabled"]') .should('have.text',"Orange").and('be.disabled')
            cy.get('#fruit-selects').children('option').eq(1).should('have.text',"Orange").and('be.disabled')
        })
})






