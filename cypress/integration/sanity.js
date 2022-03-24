/// <reference types="cypress" />

context('Sanity tests', () => {
  it('visits app on localhost', () => {
    cy.visit('http://localhost:3000')
  })
})
