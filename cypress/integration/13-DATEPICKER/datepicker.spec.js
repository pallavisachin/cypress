//const cypress = require("cypress")

describe("to verify the date selection in a cypress", function () {

    it('verify the datepicker function', function () {

        let date = new Date()
        cy.log(date.getFullYear())
        cy.log(date.getMonth())
        cy.log(date.getDate())
        cy.log(date.getDay())
        cy.log(date.getTime())


        // here the date is gives for me 13 may 2023
        //then i calculate todaysdate+adding days which date is for me
        //how many days until may 13 2023

        let date2 = new Date()                           // Date()
        date2.setDate(date2.getDate() + 285)


        let year = date2.getFullYear()           // disply year
        let month = date2.getMonth()            // month is strats from 0 index   0 -january  so may = 04
        let ndate = date2.getDate()             // display date
        let monthinstring = date2.toLocaleString("default", { month: "long" })       // here month is in string so we use toLocaleString
        cy.log(monthinstring)
        cy.log(year)
        cy.log(month)
        cy.log(ndate)


        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get("#datepicker").click()

        function selectMonthandDate() {

            cy.get('.datepicker-switch').first().then(function (el) {
                //cy.log(el.text)

                if (!el.text().includes(year)) {
                    cy.get(".next").last().click({ force: true })
                    selectMonthandDate()
                }

            })
            cy.get('.datepicker-switch').first().then(function (el) {
                //cy.log(el.text)

                if (!el.text().includes(monthinstring)) {
                    cy.get(".next").last().click({ force: true })
                    selectMonthandDate()
                }

            })

        }

        function selectDate() {
            cy.contains(ndate).click()
        }
        selectMonthandDate()
        selectDate()


    })


})