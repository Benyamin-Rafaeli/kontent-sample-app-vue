/// <reference types="cypress" />

context('Navigate to site', () => {

  beforeEach(() => {cy.visit('/')})

  it('cy.navigate - choose English version', () => {
    cy.contains('Use the shared project').click()

    const myArray = ['Home', 'Product catalog', 'Articles', 'About us', 'Cafes', 'Contact']
    cy.wrap(myArray).each(el => {
      return new Cypress.Promise(resolve => {
        cy.get('.menu').find('li').then(nav => expect(nav).to.contain(el))

        // .should('have.length', 8).then(ci => expect(ci).to.contain(el))
        // .children('a').should(children => expect(children).to.contain(el))
        resolve()
      })
    })

  })

})
