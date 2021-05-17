import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I am on the home page", () => {
    cy.visit(Cypress.env("URL"));
})

Given("I have no tasks", () => {
    cy.visit(Cypress.env("URL"));
    window.localStorage.setItem("tasks", "[]");
})
