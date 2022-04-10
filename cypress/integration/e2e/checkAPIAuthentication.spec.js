// Create session API: https://api.staging.dripcapital.com:8080/access/sessions

describe('Login thru API', () => {
  it.skip('Login', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.staging.dripcapital.com:8080/access/sessions',
      body: { user: { email: "jatin+ops@dripcapital.com", password: "123456" } },
      // auth: {
      //   'bearer': 'Token b9787bb24db4a54488b107fbea3378f3140a8b67582348d59f183bd8ba46d59b'
      // },
      headers: {
        authorization: 'Token b9787bb24db4a54488b107fbea3378f3140a8b67582348d59f183bd8ba46d59b',
        origin: 'https://portal.staging.dripcapital.com'
      },
      followRedirect: false, // turn off following redirects  
    }).then((resp) => {
      expect(resp.redirectedToUrl).to.eq('https://portal.staging.dripcapital.com/')
    })
  })
})