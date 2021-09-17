export function selectTraveler(){
    cy.get('input[aria-label="Chips autocomplete"]').click()
    cy.get('input[aria-label="Chips autocomplete"]').type('Sophie')
    cy.get('.ctr-traveler-select__result-item').contains('Sophie lie').click()
}
export function departure(){
    cy.get('input[placeholder="Departure"]').type('BER')
    cy.get('.ctr-select-results__content').contains('Berlin, Germany').click()
}
export function destination(){
    cy.get('input[placeholder="Destination"]').type('MUC')
    cy.get('.ctr-select-results__content').contains('Munich').click()
}
export function selectDate(){
    cy.get('ctr-input-datepicker[formcontrolname="date"]').click()
    cy.get('button[class="ctr-header__button ctr-header__button--next"]').eq(1).click()
    cy.get('[class="ctr-calendar ctr-calendar--is-range"] button[class="ctr-month__date-button"]').contains(15).click()
    cy.get('[class="ctr-calendar ctr-calendar--is-range"] button[class="ctr-month__date-button"]').contains(20).click()
}
export function selectFlight(){
    cy.contains('Select option')
    cy.get('[data-cy="SelectFlightOption"]').eq(0).click()
}
export function travellerVerification(){
    cy.get('ctr-context-header[class="context-header--border-active"]').should('contain','Flight checkout')
    cy.get('[class="ctr-checkout-traveler__traveler-name"]').should('contain','Sophie lie')

}
