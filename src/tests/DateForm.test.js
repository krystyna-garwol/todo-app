import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DateForm from '../components/DateForm';
import { tasks, oneTask, noTasks } from './mockData';


describe("DateForm", () => {
    test("Renders number of tasks correctly", () => {
        render(<DateForm tasks={tasks} />);
        expect(screen.getByTestId('date-tasks')).toHaveTextContent('3 Tasks');
    })

    test("Renders '1 Task' if only 1 task added to the list", () => {
        render(<DateForm tasks={oneTask} />);
        expect(screen.getByTestId('date-tasks')).toHaveTextContent('1 Task');
    })

    test("Renders 'No Tasks' if there are no tasks in the list", () => {
        render(<DateForm tasks={noTasks} />)
        expect(screen.getByTestId('date-tasks')).toHaveTextContent('No Tasks');
    })

    test("Correct date ordinal is displayed, depending on the day", () => {
        render(<DateForm tasks={tasks} />)
        expect(screen.getByRole('heading')).toHaveTextContent(/st|nd|rd|th/);
    })
})
