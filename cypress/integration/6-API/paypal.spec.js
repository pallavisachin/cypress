



// describe('validate the Pay api',function(){

//     let token  = undefined
//     it('validate the Generate Token API',function(){
//         cy.request({
//             method:"POST",
//             url:"https://api-m.sandbox.paypal.com/v1/oauth2/token",
//             headers:{
//                 "Authorization":"Basic QWVHbGowNnh1SUl4ZllHR1hzeGlZbUVZendvUzExcW5KQnBudWJGOGVScGRyVXVWMnFPYmszQzVoQWhHdTc4aTFKMjVrQWRDajI4V3VoeVE6RUR5OGRTSlo1YjdNR3NmZnQxSnBhQ0RWOXhwakVhWXZ6QzQyMElsSm5zRlRvY19xa0tYLVZnYlJfLTJXRjA1TUtaV0lJUXVkQ3B4SVZCajY"
//             },
//             body:{
//                 grant_type:'client_credentials'
//             },
//             form:true

//         }).then(function(res){
//             cy.log(res)
//             token = res.body.access_token
//             cy.log(res.body.access_token)
//         })

//     })
// })
// it('Valdidate the GET API',function(){
//     cy.request({

//         method:"GET",
//         url:"https://api-m.sandbox.paypal.com/v2/invoicing/invoices?total_required=true",
//         headers:{
//             "Content-Type":"application/json",
//             "Authorization":`Bearer ${token}`
//         }

//     }).then(function(res){
//         //cy.log(res)
//         expect(res.status).to.eqls(200)
//         expect(res.body).to.have.keys(["total_pages","total_items"])
//     })



// })

//---------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------//
describe('validate the Pay api',function(){

    let token  = undefined
    it('validate the Generate Token API',function(){
        cy.request({
            method:"POST",
            url:"https://api-m.sandbox.paypal.com/v1/oauth2/token",
            headers:{
                "Authorization":"Basic QVlLcHMxNnhpeWhRaEFESkk2M2JIMDNxOFhETDBtTm5kZDhRRXZBc0x0NGw2NkZ4V1hEcHpNeDZ2bU0xb3FweHlpeUNCQlNUUW8yZHI4NmI6RUg3RC0tY2dUeGk5U0c0bjNmMEVuRUt3SGxJZGxqejB2dW5lVnAzelRfMXRZUDRDQm1nSFdLdmtUUUx0RXNmcVRmSUhnYkJwWWUyaTQwc2E="
            },
            body:{
                grant_type:'client_credentials'
            },
            form:true

        }).then(function(res){
            cy.log(res)
            token = res.body.access_token
            cy.log(res.body.access_token)
        })

    })
})
it('Valdidate the GET API',function(){
    cy.request({

        method:"GET",
        url:"https://api-m.sandbox.paypal.com/v2/invoicing/invoices?total_required=true",
        headers:{
            "Content-Type":"application/json",
            //"Authorization":`Bearer ${token}`
            "Authorization":`Bearer A21AAK05ouag6Yclt9UNwKaD3EJSzdMfctiBGRMUBsQVvjoQjqhnbkeIDXCZrSIzzbKoe_ak-NFcRPCDUIFs4q_aDVpd-87VA`
        }

    }).then(function(res){
        cy.log(res)
        expect(res.status).to.eqls(200)
        expect(res.body).to.have.keys(["total_pages","total_items"])
    })



})





















