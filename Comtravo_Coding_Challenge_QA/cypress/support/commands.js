Cypress.Commands.add('login', (email,password) => { 
    cy.get('input[type="email"]').type(`${email}`)
    cy.get('input[name="password"]').type(`${password}`)
    cy.get('button[type="submit"]').click()
}) 