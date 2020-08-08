// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

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
