/* eslint-disable no-undef */

describe('Test', () => {
  it('login', () => {

const email = "garrett.grim111@gmail.com"
const pass = "Tester!123"

  cy.visit('https://box.signageos.io/')
  cy.writeFile('cypress/test_result.txt', 'visit https://box.signageos.io/\n', { flag: 'a+' })


  // this could be used when we want to make assertion on ANY data inside input (at least one word - may include numbers but not special characters like @ or .)
  // for matchin any character, swat /w+ with .*

  cy.get('#email')
  .type(email)
  .invoke('val')
  .should(value => {
    expect(value).to.match(/\w+/)
  })
  cy.writeFile('cypress/test_result.txt', 'Get email input, type inside value, check if input contains at least one word\n', { flag: 'a+' })

  // this could be used when we want to make assertion that inputed is our specific string
  // cy.get('#email')
  // .type(email)
  // .invoke('val')
  // .should(value => {
  //   expect(value).to.match(new RegExp(email))
  // })

  // this could be used when we want to make assertion on Integers inside input (only numbers can be inputed)
  // this implementation results into failed test as expected due to used password (contains not a number elements)

  // cy.get('#password')
  // .type(pass)
  // .invoke('val')
  // .should(value => {
  //   expect(value).to.match(/^[0-9]*$/)
  // })

  // this could be used when we want to make assertion that at least one number is inputed
   cy.get('#password')
  .type(pass)
  .invoke('val')
  .should(value => {
    expect(value).to.match(/\d+$/)
  })

  cy.writeFile('cypress/test_result.txt', 'Get password input, type inside value, check if value contains at least one number\n', { flag: 'a+' })

  cy.get("[data-testid=submit]").click()
  cy.writeFile('cypress/test_result.txt', 'Click on submit\n', { flag: 'a+' })


  cy.get('[data-testid=page-header]', { timeout: 30000 })
  cy.writeFile('cypress/test_result.txt', 'Wait for the page to load\n', { flag: 'a+' })

  cy.url().should('include', 'box')
  cy.writeFile('cypress/test_result.txt', 'Make sure URL contains word "box"\n', { flag: 'a+' })
  cy.writeFile('cypress/test_result.txt', 'Test finished all steps\n', { flag: 'a+' })
  })
})