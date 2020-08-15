/// <reference types="cypress" />

describe('Store tests for Dancing Goat site', () => { // {browser: 'firefox'},

  beforeEach(() => {
    cy.visit('/')
    cy.fixture('data.json').as('data')
  })

  context('en', () => {
    it('validate Coffee products in store', () => {
      cy.get('@data').then(data => {
        cy.navigateToCoffee(data.en)

        cy.get('#product-list > div').as('products')
        cy.get('@products').then(prod => {
          expect(prod.length).eq(2)
          expect(prod.find('h1')[0].textContent).eq(data.brazil.title)
          expect(prod.find('.product-tile-price')[0].textContent.trim()).contain(data.brazil.price)
          expect(prod.find('h1')[1].textContent).eq(data.kenya.title)
          expect(prod.find('.product-tile-price')[1].textContent.trim()).contain(data.kenya.price)
        })
      })
    })

    it('validate "Wet (Washed)" checkbox functionality', () => {
      cy.get('@data').then(data => {
        cy.navigateToCoffee(data.en)
        cy.validateProduct(data.kenya)
      })
    })

    it('validate "Dry (Natural)" checkbox functionality', () => {
      cy.get('@data').then(data => {
        cy.navigateToCoffee(data.en)
        cy.validateProduct(data.brazil)
      })
    })

    it('validate "Semi-dry" checkbox functionality', () => {
      cy.get('@data').then(data => {
        cy.navigateToCoffee(data.en)

        cy.contains('Semi-dry').click()
        cy.get('#product-list').as('products')
        cy.get('@products').then(prod => expect(prod.length).eq(1))
      })
    })

    it('validate Brewers products in store', () => {
      cy.get('@data').then(data => {
        cy.navigateToBrewers(data.en)

        cy.get('#product-list > div').as('products')
        cy.get('@products').each((prod, i) => {
          expect(prod.find('.product-heading').text()).to.equal(data.brewers[i].title)
          expect(prod.find('.product-tile-price').text()).to.contain(data.brewers[i].price)
        })
      })
    })
  })
})
