


describe("to checkimg the drop down functionality", function () {

    it('TS-1 to check drop down', function () {

        cy.visit('https://www.lonavalacab.com/')

        cy.get('[id="package"]').select('Waterfall Special').should('have.value', 'Waterfall Special')
        //cy.get('[id="package"]').select('Full Sightseeing').should('hava.value', 'Full Sightseeing')
        cy.get('[id="car"]').select('4 Seater').should('have.value', '1')

    })

    it('TS-2 to check drop down', function () {

        cy.visit('https://www.lonavalacab.com/')

        let selectvalues = ["Waterfall Special", "17 Seater"]
        cy.get('[class="form-control tm-select"]').each(function (el, ar) {
            cy.wrap(el).select(selectvalues[ar]).should('contain', selectvalues[ar])
        })

    })

    it('Tc-03 To test dynamic dropdown', function () {
        cy.visit("https://paytm.com/train-tickets")
        cy.get('[id="text-box"]').first().click()
        cy.get('[class="_16Y_"] ._3ewH ._3sXO').each(function (el) {

            let value = el.text()
            cy.log(value)

            if (value == "Bengaluru- All Stations") {
                cy.wrap(el).click()
            }
        })

    })
    it.only('to check the dependant drop down', function () {
        cy.visit('https://www.coderglass.com/jquery/demo/country-state-city-dropdown/')
        cy.get('#country').select('India')
        cy.get('#state').select('Maharashtra').then(function (el) {
        cy.get('#city').select('Pune').should('contain', 'Pune')
        })
    })
})