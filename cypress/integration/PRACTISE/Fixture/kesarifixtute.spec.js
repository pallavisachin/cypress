import obj from '../../../fixtures/kesari.json'

describe(" verify the url using fixtre in test cases", function () {

it('TC-01  to check functionality of the simple test case', function () {
    cy.fixture('kesari').then(function (res) {
        cy.log(res)
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled').children().each(function(el,index){

       let text = el.find('a:first')
       if(text.attr('href') .startsWith('/')){
        cy.wrap(text).click()
        cy.url().should('contain',res[index])
        cy.go('back')
       }

        })
    })
})
})