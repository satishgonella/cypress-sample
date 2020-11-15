

describe("sign in", function(){
    it('sign in',function(){
       cy.visit('https://react-redux.realworld.io/#/login?_k=1buoe1')
       cy.get('input[type="email"]').type('abc@gmail.com')
       cy.get('input[type="password"]').type('abc@gmail.com')
       cy.get('.btn').contains('Sign in').should('be.visible').click()
       cy.get('.error-messages > li').should('be.visible')
    })
})
