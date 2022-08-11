//const cypress = require("cypress")
//const { it } = require("mocha")

describe("to check ", function () {
    //let token=`Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed73cd2da826a931aa0a`
    it.skip('get', function () {
        cy.request({
            method: "GET",
            url: 'https://gorest.co.in/public/v2/users',
            Headers: {
                Authorization: `Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed73cd2da826a931aa0a`

            }

        }).then(function (response) {
            cy.log(response)

            expect(response.status).to.eql(200)
            expect(response.body.length).to.eql(10)
            response.body.forEach(element => {
                expect(element).to.have.keys(["id", "email", "status", "gender", "name"])
            });
        })
    })

    it.skip('verify the create user API', function () {
        // let payload =
        // {
        //     "name": "Tenali Ramakrishna",
        //     "gender": "male",
        //     "email": `${Math.random()* 730}tenali.ramakrishna@17775ce.com`,
        //     "status": "active"
        // }

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed73cd2da826a931aa0a`
            },
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": `tenali${Math.random() * 730}.ramakrishna@17775ce.com`,
                "status": "active"

            }

        }).then(function (response) {
            cy.log(response)
        })
    })



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // it.only('post request', () => {
    //     cy.request({
    //         method: 'POST',
    //         url: "https://gorest.co.in/public/v2/users",
    //         headers: {
    //             Authorization: `Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed73cd2da826a931aa0a`
    //         },
    //         body: {
    //             "name": "Tenali Ramakrishna",
    //             "gender": "male",
    //             "email": `tenali${Math.random() * 730}.ramakrishna@17775ce.com`,
    //             "status": "active"
    //         }

    //     }).then(function (res) {
    //         cy.log(res)
    //     })
    // })
    //})
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    it('verify the put request', () => {
        cy.request({
            method: 'PUT',
            url: "https://gorest.co.in/public/v2/users/478",
            headers: {
                Authorization: `Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed73cd2da826a931aa0a`
            },
            body: {
                "name": "Allasani Peddana",
                "email": "allasani.peddana@1519ce.com",
                "status": "active"
            }

        }).then(function (res) {
            cy.log(res)
        })
    })
})
it.only('verify the DELETE User API', function () {
    cy.request({
        method: "DELETE",
        url: "https://gorest.co.in/public/v2/users/478",
        headers: {
            Authorization: `Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed73cd2da826a931aa0a`
        },
    }).then(function (res) {
        cy.log(res)
        //expect(res.status).to.eqls(204)
    })
})

