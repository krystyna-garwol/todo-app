import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Task from '../components/Task';
import { tasks } from './mockData';

describe("Task", () => {
    const mockSetTasks = jest.fn();
    const mockSetTaskInput = jest.fn();
    const mockSetIsEditing = jest.fn();
    const mockSetEditedTaskId = jest.fn();
    beforeEach(() => {
        render(
            <Task
                task={tasks[0]}
                tasks={tasks}
                setTasks={mockSetTasks}
                setTaskInput={mockSetTaskInput}
                setIsEditing={mockSetIsEditing}
                setEditedTaskId={mockSetEditedTaskId}
            />
        );
    });

    test("Renders correctly", () => {
        expect(screen.getByTestId('todo-item')).toHaveTextContent('clean flat');
    })

    test("removeTask method is called when trash icon button is clicked", () => {
        userEvent.click(screen.getByTestId('i-trash'));
        expect(mockSetTasks).toHaveBeenCalledTimes(1);
    })

    test("completeTask method is called when todo item text field is clicked", () => {
        userEvent.click(screen.getByTestId('todo-text'));
        expect(mockSetTasks).toHaveBeenCalledTimes(1);
    })

    test("handleEdit method is called when edit icon button is clicked", () => {
        userEvent.click(screen.getByTestId('i-edit'));
        expect(mockSetTasks).toHaveBeenCalledTimes(1);
    })

    test("Todo-text has css 'completed' class if completed is set to true", () => {
        const todoText = screen.getByText('clean flat');
        expect(todoText).toHaveClass('completed');
    })
})
