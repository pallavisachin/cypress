describe("traverse method in url keasri", function () {
    beforeEach(function () {
        cy.visit('https://www.kesari.in/')
    })

    it('TC-01 .children() method', function () {

        cy.get('.menu.list-unstyled ').children().should('have.length', 11)

    })
    it('TC-02 .first() method', function () {
        cy.get('.menu.list-unstyled').children().first().should('be.visible')
        cy.get('.menu.list-unstyled').children().find('li').first().should('exist')

    })
    it('TC-03 .last() method', function () {
        cy.get('.singlemenu.left.list-unstyled.mb-0').children('li').last().should('have.text', 'Annual Report')

    })
    it('TC-04 .eq() method', function () {
        cy.get('.singlemenu.left.list-unstyled.mb-0').find('li').eq(4).should('have.text', 'FAQs')
    })
    it('TC-05 .find() method', function () {
        cy.get('.menu.list-unstyled').find('a').each(function (element, index) {
            let text = element.text()
            cy.log(text)
        })
    })
    it('TC-06 .next() method', function () {
        cy.get('.menu.list-unstyled').children().eq(6).next().should('have.text', 'Cruises')

    })
    it('TC-07 .prev() method', function () {
        cy.get('.menu.list-unstyled').children().eq(5).prev().should('have.text', 'CorporateTravel')

    })
    it('TC-08 .prevAll() method', function () {

        cy.get('.menu.list-unstyled').children().eq(5).prevAll().should('have.length', 5)

    })
    it('TC-09 .nextAll() method', function () {

        cy.get('.menu.list-unstyled').children().eq(5).nextAll().should('have.length', 5)

    })
    it.only('TC-10 .closest() method', function () {

        cy.get('div[class="topnav__top"]').closest('div').should('have.attr', 'class', 'topnav__top')
    })

})









