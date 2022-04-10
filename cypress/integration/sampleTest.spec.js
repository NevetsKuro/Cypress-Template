import pages from '../fixtures/tech-blog-pages.json';

describe(pages.homePage, () => {
  beforeEach(() => {
    // cy.visit('http://tech.dripcapital.com/');
    cy.visit('/');
  });
  it('log browser info', () => {
    console.log("Browser Info", Cypress.browser)
  })
  it('Random passed test', () => {
    expect(true).to.equal(true);
  });
  it('Click on developer name', () => {
    cy.contains('Steven Fernandes').click();
    cy.url().should('include', 'stevenferns.me')
  });
  // it('Does image render', () => {
  //   cy.readFile('cypress/fixtures/images/who-we-are.jpg', null).then((file) => {
  //     expect(Buffer.isBuffer(file)).to.be.true
  //   })
  // });
});