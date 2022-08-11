describe('to preform GET , POST ,PUT,DELETE', function () {

    it('to check list of users', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headeres: {
                Authorization: "Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed73cd2da826a931aa0a"
            }
        }).then(function (res) {
            cy.log(res)
        })
    })

    it('to crete the  users', function () {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headeres: {
                Authorization: `Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed73cd2da826a931aa0a`
            },
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
               // "email": `tenali${Math.random()*6}.ramakrishna@15ce.com`,
                "email":"tenali.ramakrishna@15577ce.com",
                "status": "active"
            },
            failOnStatusCode: false

        }).then(function (response) {
            cy.log(response)
        })
    })
    it('to update the  users', function () {
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/9",
            headeres: {
                Authorization: `Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed73cd2da826a931aa0a`
            },
            body: {
                "name": "pallavi bhand",
                
               // "email": `tenali${Math.random()*6}.ramakrishna@15ce.com`,
                "email":"tenali.ramakrishna@15577ce.com",
                "status": "active"
            },
           failOnStatusCode: false

        }).then(function (response) {
            cy.log(response)
        })
    })
    it.only('to delete the  users', function () {
        cy.request({
            method: "DELETE",
            url: "https://gorest.co.in/public/v2/users/9",
            headeres: {
                Authorization: `Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed73cd2da826a931aa0a`
            },
            
           failOnStatusCode: false

        }).then(function (response) {
            cy.log(response)
        })
    })
})
