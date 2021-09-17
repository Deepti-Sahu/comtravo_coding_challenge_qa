/// <reference types = "cypress" />
import {departure, destination, selectDate, selectFlight, selectTraveler,travellerVerification} from './flight_booking_helper'
describe('Comtravo Coding Challenge QA', ()=>{
    it('Flight Booking for a Traveller "Sophie lie"',() => {
        cy.visit('https://my.qa.comtravo.it/auth/login')
        cy.login('robot+qatask@comtravo.com','Qatask@08')
        cy.url({timeout:50000}).should('include', '/search/flight')
        selectTraveler()
        departure()
        destination()
        selectDate()
        cy.get('button[data-cy="Search flights"]').click()
        cy.get('.ng-star-inserted',{timeout:50000}).should('contain','Your flight options')
        selectFlight()
        travellerVerification()
        cy.get('button[aria-label="book this flight option"]').click()
        cy.get('[class="confirmation-message"]',{timeout:10000}).should('contain','We received your booking.')
        

       
        










        

        


        

            
        
        
        

        

    
        

        
        
        
        
        
        



    
                
        
        
    })
})