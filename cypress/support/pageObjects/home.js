class Home {

    getDateItems() {
        return cy.get("[data-testid=date-items]");
    }

    getInput() {
        return cy.get("input");
    }

    addTask() {
        return cy.get("[data-testid=btn-add]");
    }

    editTask() {
        return cy.get("[data-testid=i-edit]");
    }

    submitUpdatedTask() {
        return cy.get("[data-testid=btn-edit]");
    }

    removeTask() {
        return cy.get("[data-testid=i-trash");
    }

    removeAllTasks() {
        return cy.get("[data-testid=btn-clear]");
    }

    getTask() {
        return cy.get("[data-testid=todo-text]");
    }

    getNoTasksMessage() {
        return cy.get("[data-testid=no-tasks-message]");
    }

}

export default Home;
