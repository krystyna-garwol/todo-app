import { And } from "cypress-cucumber-preprocessor/steps";
import Home from "../../support/pageObjects/home";

const home = new Home();

And("I click the {string} button", button => {
    switch (button) {
        case "Add Task":
            home.addTask().click();
            break;
        case "Edit Task":
            home.editTask().click();
            break;
        case "Submit Updated Task":
            home.submitUpdatedTask().click();
            break;
        case "Delete Task":
            home.removeTask().click();
            break;
        case "Delete All Tasks":
            home.removeAllTasks().click();
            break;
    }
})

And("I type {string} in the input field", task => {
    home.getInput().type(task);
})
