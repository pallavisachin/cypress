

describe('to validate the all GET PUT POST DELETE', function () {

    it('tc-1 to GET list of user in ', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
             }).then(function ({ body, duration, headers, status }) {
            //cy.log(res)
            cy.log(body)
            cy.log(status)
            cy.log(headers)
            cy.log(duration)
            expect(status).eq(200)
            expect(headers).to.have.property('cache-control', 'max-age=14400')
            expect(body).to.have.keys(['data', 'page', 'per_page', 'support', 'total', 'total_pages'])

        })


    })
   // body, duration, headers, status

    it('tc-2 to POST create user in ', function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body:{
                "name": "pallavi",
                "job": "bhand"
            }
            

             }).then(function (res) {
            cy.log(res)
            expect(res.status).eq(201)
           
            })


    })

    it('tc-3 to PUT create user in ', function () {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body:{
                "name": "sachin",
                "job": "bhand"
            }
            
             }).then(function (res) {
            cy.log(res)
            expect(res.status).eq(200)
           
            })

        })

        it('tc-4 to delete create user in ', function () {
            cy.request({
                method: "DELETE",
                url: "https://reqres.in/api/users/2",
               
                 }).then(function (res) {
                cy.log(res)
                expect(res.status).eq(204)
               
                })
    
            })



})