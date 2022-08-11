
/// <reference types="cypress" />





describe('verify the wrap function in cypress', function () {

    Cypress.on('uncaught:exception', function () {
        return false
    })



    let getInfo = function (x, y) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(x + y)
            }, 2000)
        })
    }

    it.only('verify the cypress wrap element ', function () {
        let sum1 =getInfo(20,20)
        // in javascript
        // let sum = getInfo(15, 15).then(function (add) {
        //     //cy.log(sum)
        //     expect(add).to.eq(30)
         // })

            //in cypress
            cy.wrap(sum1).should('eq',40)

       
    })
    it('verify the cypress wrap element ', function () {
        cy.visit('https://www.zoomin.com/sign-up')
        cy.get('[name="name"]').then(function (el) {
            el.val('pallavi')
            cy.wrap(el).type(' sachin')
        })
    })

    it('verify the cypress wrap element ', function () {
        let name = "pallavi bhand"
        cy.wrap(name).should('eq', "pallavi bhand")
    })

    it('verify the cypress wrap element ', function () {
        let person = { name: "pallavi ", lastname: "bhand", roll_no: 7 }
        cy.wrap(person).should('have.a.property', 'name')
        cy.wrap(person).should('have.a.property', 'lastname')
        cy.wrap(person).should('have.a.property', 'roll_no')
        cy.wrap(person).should('have.all.deep.keys', 'name', 'lastname', 'roll_no')
        cy.wrap(person).should('have.any.key', 'lastname')
        cy.wrap(person).should('have.any.keys', 'roll_no')
    })


    it('verify the cypress wrap element ', function () {
        let fruits = ["apple", "mango", "papaya", "banana", "grapes"]

        cy.wrap(fruits).should('include', 'mango')
        cy.wrap(fruits).should('include', 'papaya')
    })


    it.skip('verify the cypress wrap element ', function () {
        expect(1).to.eq(2)
    })




})