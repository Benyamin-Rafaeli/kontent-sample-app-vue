/// <reference types="cypress" />

describe('Smoke tests for Dancing Goat site', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.fixture('data.json').as('data')
  })

  context('en', () => {
    it('validate products in store', () => {
      cy.get('@data').then(data => cy.navigateAndValidate(data.en))
      cy.contains('Product catalog').click()

      cy.get('#product-list > div').as('products')
      cy.get('@products').then(prod => {
        // validate count
        expect(prod.length).eq(2)
        // validate product title
        expect(prod.find('h1')[0].textContent).eq('Brazil Natural Barra Grande')
        expect(prod.find('.product-tile-price')[0].textContent.trim()).eq('$8.50')
        // validate product price
        expect(prod.find('h1')[1].textContent).eq('Kenya Gakuyuni AA')
        expect(prod.find('.product-tile-price')[1].textContent.trim()).eq('$10.50')
      })
    })

    xit('validate navigation bar [Cypress.Each example]', () => {
      cy.get('@data').then(data => cy.navigateAndValidate(data.en))
      cy.get('@data').then(data => cy.validatePanelByEach(data.en_nav_panel))
    })
  })

})
