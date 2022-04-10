
describe('Create Invoice Journey', () => {
  it('log browser info', () => {
    console.log(cy.browser)
  })
  it('New Invoice', () => {
    cy.visit('https://portal.staging.dripcapital.com/')

    cy.get('#login-email')
      .type('jatin+ops@dripcapital.com')

    cy.get('#login-password')
      .type('123456')

    cy.contains('Login')
      .click()
    cy.get('#v-step-13').click()

    // fill 1st form
    cy.contains('INDUSTRIASPECIALITA').click({ force: true })
    cy.contains('OK, Got It').click()
    cy.get("input[name='reference']").type('SHIPREF' + (Math.random() + 1).toString(36).substring(7))
    cy.get("input[name='invoice_date']").type('27/04/2022')
    cy.get("input[name='currency']").type('USD', { force: true })
    cy.get("input[name='gross_value']").type('1240')
    cy.get("input[name='advance_received']").type('{backspace}200')
    cy.contains('Net Invoice Value').parents('.form-group').find('input').should('have.value', '1040')

    cy.wait(2000)
    // form completed, move to Next page
    cy.contains('Next').click()
    cy.wait(5000)

    // fill 2nd form
    cy.get("input[name='shipping_bill_date']").type('08/04/2022')
    cy.get("input[name='shipping_line']").type('APM-Maersk')
    cy.get("input[name='consignee']").type('maersk')
    cy.get("input[name='vessel_name']").type('mark-2')
    cy.get("input[name='user_due_date']").type('28/04/2022')

    cy.wait(3000)
    // form completed, move to Next page
    cy.contains('Next').click()

    // fill 3rd form
    cy.wait(2000)

    cy.contains('HDFC BANK LTD - EURO-HDFCBANK-EURO').click()
    // cy.contains('Adjust Against Existing').click()

    // cy.contains('rf-003-seller-test').click({force: true})

    // cy.contains('Silicon Valley Bank')

    // cy.contains('Drip Capital Inc')

    cy.wait(3000)
    // form completed, move to Next page
    cy.contains('Next').click()
    const dummyFile = 'files/sample.pdf'
    cy.get("input[type='file']").should('exist')
    // cy.get("input[type='file']").eq(2).attachFile(dummyFile)
    // cy.get("input[type='file']").eq(0).attachFile(dummyFile)
    // cy.get("input[type='file']").eq(1).attachFile(dummyFile)
    // cy.get("input[type='file']").eq(3).attachFile(dummyFile)
    cy.document().get("#sb-opt").attachFile(dummyFile, { subjectType: 'drag-n-drop' })
    cy.wait(2000)
    cy.document().get("#invoice").attachFile(dummyFile, { subjectType: 'drag-n-drop' })
    cy.wait(2000)
    cy.document().get("#po").attachFile(dummyFile, { subjectType: 'drag-n-drop' })
    cy.wait(2000)
    cy.document().get("#bl").attachFile(dummyFile, { subjectType: 'drag-n-drop' })
    // cy.document().get('#invoice').selectFile(dummyFile, { action: 'drag-drop' })
    // .selectFile(dummyFile)

  })
})