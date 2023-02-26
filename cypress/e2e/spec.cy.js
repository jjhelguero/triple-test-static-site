describe('triple test static site', () => {
  const moreFruitsTitle = 'More Fruits!'
  const landingPageTitle = 'Landing Page'
  beforeEach(() => cy.visit('/'))
  it('has index and about pages', () => {
    cy.contains('h1', landingPageTitle)
    cy.contains('Fruits')
    cy.contains('a', moreFruitsTitle).click()
    cy.url().should('match', /moreFruits/)
    cy.contains('h1', moreFruitsTitle)
    cy.contains('a', landingPageTitle).click()
    cy.url().should('not.match', /moreFruits/)
  })
  it('finds About page using search', () => {
  cy.get('.search-box input').type(moreFruitsTitle)
  // suggestions list appears
  cy.get('.suggestions li').should('be.visible')
    // and should have at least 1 item
    .and('have.length.gte', 1)
    // and the first search result is our "About" page
    .first()
    .contains('.page-title', moreFruitsTitle).click()
  // check we are on the right page
  cy.title().should('contain', moreFruitsTitle)
})
})