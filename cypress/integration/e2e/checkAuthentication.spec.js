describe('Check Authentication', () => {
  it('Login & logout user jatin', () => {

    cy.visit('https://portal.staging.dripcapital.com/')

    cy.get('#login-email')
      .type('jatin+ops@dripcapital.com')

    cy.get('#login-password')
      .type('123456')

    cy.contains('Login')
      .click()

    cy.url()
      .should('include', '/')

    // session exist in cookie
    // cy.getCookie('accountId').should('have.property', 'value', '7131')
    cy.contains('Advance')
    cy.contains('Invoices')
    cy.contains('Settlement')
  
    cy.wait(5000)
    cy.get('#sidebar-account')
    .click({force: true})
    cy.wait(5000)
      cy.get('#header-user-dropdown__BV_toggle_').click().then(()=>{
    cy.get('#header-signout')
      .click({force: true})
    })
    cy.contains('Forgot your password?')
  })
})