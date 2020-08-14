Cypress.Commands.add('navigateAndValidate', (language) => {
  cy.contains('Use the shared project').click()
  cy.contains('Home').click()

  const lang = language === 'en' ? 'English' : 'Español'
  cy.contains(lang).click()

  cy.location()
    .should(loc => expect(loc.href)
      .to.include(language))

  // cy.location().then((loc) => console.log(loc))
})

Cypress.Commands.add('validatePanelByPromise', (myArray) => {
  cy.wrap(myArray).each(el => {
    return new Cypress.Promise(resolve => {
      cy.get('ul>li')
        .then(nav => expect(nav).to.contain(el))
      resolve()
    })
  })
})

Cypress.Commands.add('validatePanelByEach', (myArray) => {
  cy.get('ul>li')
    .each(($el, index) => {
      expect($el[0].textContent).to.equal(myArray[index])
    })
})

Cypress.Commands.add('navigateToCoffee', (lang) => {
  cy.navigateAndValidate(lang)
  const prod_catalog = lang === 'en' ? 'Product catalog' : 'Tienda'
  cy.contains(prod_catalog).click()
  cy.get('.router-link-exact-active').click()
  // const coffee_catalog = lang === 'en' ? 'Coffees' : 'Cafés'
  // cy.contains(coffee_catalog).click()
})

Cypress.Commands.add('navigateToBrewers', (lang) => {
  cy.navigateAndValidate(lang)
  const prod_catalog = lang === 'en' ? 'Product catalog' : 'Tienda'
  cy.contains(prod_catalog).click()

  cy
    .get('.store-menu-list.row')
    .find('li')
    .each($el => {
      if ($el.text() === 'Brewers') cy.wrap($el).click()
    })
})

Cypress.Commands.add('validateProduct', (p) => {
  cy.contains(p.type).click()
  cy.get('#product-list > div').as('products')
  cy.get('@products').then(prod => {
    // validate count
    expect(prod.length).eq(1)
    expect(prod.find('h1')[0].textContent).eq(p.title)
    expect(prod.find('.product-tile-price')[0].textContent.trim()).contain(p.price)
  })
})

// Cypress.Commands.overwrite('visit', (...params) => {
//   cy.visit('/', {timeout: 10000})
//   return cy.fixture('data.json').as('data')
// })


