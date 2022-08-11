//const { it } = require("mocha")

//const { expect } = require("chai")

//const { expect } = require("chai")
//const { eq } = require("cypress/types/lodash")

// const { expect } = require("chai")

//const cypress = require("cypress")

describe('verify the go rest api', function () {
    it('verify the list of user API', function () {

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            Headers: {
                Authorization: `Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed`
            }

        }).then(function (response) {
            //cy.log(response)

            expect(response.status).to.eql(200)
            expect(response.body.length).to.eql(10)
            response.body.forEach(element => {
                expect(element).to.have.keys(["id", "email", "status", "gender", "name"])
            });
        })


    })

//     it.only('verify the create  user API', function () {
//         let payload = {
//             name: "Tenali Ramakrishna",
//             gender: "male",
//              email: `${Math.random()*200}tenali.ramakrishna@1155ce.com`,
//             status: "active"
//         }
//         cy.request({
//             method: 'POST',
//             url: 'https://gorest.co.in/public/v2/users/234',
//             Headers: {
//                 Authorization: `Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed`
//             },
//             body: payload
//         }).then(function (response) {
//             console.log(response)
//             expect(response.status).to.eq(201)
//             // expect(response.body).to.have.keys(["id", "email", "status", "gender", "name"])
//             // //asssertion propery and values
//             // expect(response.body.id).not.eql(null)
//             // expect(response.body.name).to.eq(payload.name)
//             // expect(response.body.email).to.eql(payload.email)
//             // expect(response.body.gender).to.eql(payload.gender)
//             // expect(response.body.status).to.eql(payload.status)
//         })
//     })



//     it('verify the update user API', function () {
//         let payload =
//             { name: "pallavi ransing", email: "allasani.peddana@1775ce.com", status: "active" }
//         cy.request({
//             method: "put",
//             url: `https://gorest.co.in/public/v2/users/16`,
//             Headers: {
//                 Authorization: `Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed`
//             },
//             body: payload
//         }).then(function (response) {
//             cy.log(response)
//         })



//     })
//     // it('verify the list of user API', function () {




//     // })
})
//-----------------------------------------------------------------------------------------//
it.only('verify the create user API', function () {
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
            Authorization: "Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed73cd2da826a931aa0a"
        },
        body: {
            "name": "Tenali Ramakrishna",
            "gender": "male",
            "email": `tenali${Math.random() * 730}.ramakrishna@17775ce.com`,
            "status": "active"

        }

    }).then( (response) =>{
        cy.log(response)
        return response.body.id
    
    }).then((id)=>{
        cy.request({
            method: "DELETE",
            url: `https://gorest.co.in/public/v2/users/${id}`,
            headers: {
                Authorization: "Bearer d62347269e0cbc4294f856df334bc8962c85df1dae33ed73cd2da826a931aa0a"
            }
        
    }).then((res)=>{
        expect(res.status).to.eql(204)
    })
})

})