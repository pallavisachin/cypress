



describe('T0 learn read and write file functionality', function () {
    it('to write a file', function () {
        cy.writeFile('Demo1.txt', 'to create file using cypress withwritefile')
        cy.writeFile('Demo1.txt', 'hi i am pallavi', { flag: 'a' })
    })

    it('To write file in fixtures', function () {
        cy.writeFile('cypress/fixtures/demo2.json',
            {
                firstName: "pallavi",
                lastName: "bhand"

            })
    })
    it.only('To read a file', function () {
        cy.readFile('Demo1.txt').then(function (data) {
            cy.log(data)
            expect(data).to.include('cypress')
        })
    })
    it.only('read file in  fixture ', function () {
        cy.fixture('demo2.json').then(function (data1) {
            cy.log(data1)
            expect(data1.firstName).to.eq('pallavi')
        })
    })
})