


describe(" to learn the screenshot", function () {
    beforeEach(function () {
        cy.visit('https://www.flipkart.com/')
    })

    it("TC-01 To take ss of current page", function () {
        cy.screenshot('filpakart1')
    })

    it.only(" TC-02 to perticular page  with x y and height and width clipped screenshot", function () {
        cy.screenshot('filpakart2', { clip:{ x: 125, y: 150, width: 200, height: 300 }})
        cy.screenshot('flipcart3',{capture: 'fullPage'})
        cy.screenshot('flipcart4',{capture: 'runner'})
        cy.screenshot('flipcart5',{capture: 'viewport'})
    })

    it("TC-03 to perticular element screenshot", function () {
        cy.get('[alt="Flipkart"]').screenshot('filpakart6')
        
    })
})