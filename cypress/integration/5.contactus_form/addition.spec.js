// const { expect } = require("chai")
// const { describe } = require("mocha")

// describe('verify the table',function(){

//     it('verify the addtion value for the table',function(){
//         let sum = 0
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('#t01').find('tr').each(function(row,index){
//             if(index != 0){
//                // cy.log(row.children().last().text())
//               sum = sum +  Number(row.children().last().text())
//             }
//         }).then(function(){
//             expect(sum).to.eq(159)
//         })
//         //cy.log(sum)

//     })
// })

describe('verifying the functionality',function(){
    
    it('to calculate the addition of number',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        let addition = 0
        cy.get('#t02').find('tr').each(function(row,index){
if(index!=0){
    addition=addition+ Number(row.children().last().text())
}
}).then(function(){
    expect(addition).to.eq(163)
})
})
})