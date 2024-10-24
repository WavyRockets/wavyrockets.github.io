/// <reference types="cypress"/>

it('Google Search', () => {
    cy.visit('https://staging.zero.giki.earth/')
    cy.contains('Sign up for Free!').click()
    cy.origin('https://gikizerostaging.b2clogin.com', () => {
      cy.get('.textInput').type('test23742374@mailinator.com')
      cy.contains('Continue').click()
      cy.get('#newPassword').type('Testing123!')
      cy.get('#reenterPassword').type('Testing123!')
      cy.get('#continue').click()
    })
})




