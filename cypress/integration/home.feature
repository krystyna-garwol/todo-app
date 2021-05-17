Feature: Home

    Background:
        Given I am on the home page

    Scenario: User is able to see the app
        Then I see the home page

    Scenario: User is able to create task
        And I type "clean kitchen" in the input field
        And I click the "Add Task" button
        Then I should see the "clean kitchen" task on the page

    Scenario: User is able to edit/update task
        And I type "clean kitchen" in the input field
        And I click the "Add Task" button
        Then I should see the "clean kitchen" task on the page
        And I click the "Edit Task" button
        And I type " and bathroom" in the input field
        And I click the "Submit Updated Task" button
        Then I should see the "clean kitchen and bathroom" task on the page

    Scenario: User is able to delete task
        And I type "clean kitchen" in the input field
        And I click the "Add Task" button
        Then I should see the "clean kitchen" task on the page
        And I click the "Delete Task" button
        Then I should see the "Your list is empty!" on the page

    Scenario: User is able to delete all tasks in one go
        And I type "clean kitchen" in the input field
        And I click the "Add Task" button
        And I type "go shopping" in the input field
        And I click the "Add Task" button
        And I type "cook dinner" in the input field
        And I click the "Add Task" button
        And I click the "Delete All Tasks" button
        Then I should see the "Your list is empty!" on the page

        # Cleanup tests after completion
        Given I have no tasks
