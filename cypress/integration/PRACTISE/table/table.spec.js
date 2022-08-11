// const { expect } = require("chai")

describe('to calculate the addition to given table', function () {
    it('to calculate the sum', function () {
       let  sum =0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01>tbody').find('tr').each(function(el,i){
                if(i!=0){
           let text =   el.children().last().text()
           cy.log(text)
           sum =sum + Number(text)
                }
        }).then(function(){
            cy.log(sum)
            expect(sum).to.eq(159)
        })

    })


    it('to calculate the sum', function () {
        let  sum =0
         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
         cy.get('#t02>tbody>tr').each(function(el,i){
                 if(i!=0){
            let text =   el.children().last().text()
            cy.log(text)
            sum =sum + Number(text)
                 }
         }).then(function(){
             cy.log(sum)
             expect(sum).to.eq(163)
         })
 
     })
})