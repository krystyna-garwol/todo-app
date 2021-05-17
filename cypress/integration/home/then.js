import { Then } from "cypress-cucumber-preprocessor/steps";
import Home from "../../support/pageObjects/home";

const home = new Home();

Then("I see the home page", () => {
    home.getDateItems().should("be.visible");
})

Then("I should see the {string} task on the page", task => {
    home.getTask().contains(task);
})

Then("I should see the {string} on the page", text => {
    home.getNoTasksMessage().contains(text);
})
