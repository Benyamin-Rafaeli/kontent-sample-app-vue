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
