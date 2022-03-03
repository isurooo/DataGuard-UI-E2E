import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given('I open the TODO list', () => {
    cy.visit('http://0.0.0.0:8080/todo')
})

Then('I should see the {string} page title', (pageTitle) => {
    cy.get('h1').should('contain', pageTitle)
})

When('I submit my {string} item', (todoItem) => {
    cy.get('#newtodo').type(todoItem)
    cy.get('[type="submit"]').click()

})


Then('I verify the added {string} item', (addedItem) => {
    cy.get('ul').contains(addedItem)

})

Then('I edit the item', () => {
    cy.get('[href="/todo/0"]').click()              //select the first item from the list
    cy.get('#editTodo').type('Mobile E2E functional').wait(100)
    cy.get('[type="submit"]').click()

})

When('I remove the items', () => {

    const numberOfItems = 3;    // Remove first 3 items from the list
    for (let i = 0; i <= numberOfItems; i += 1) {
        cy.get('[href="/todo/delete/' + [i]).click()
    }
})

