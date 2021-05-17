import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TaskForm from '../components/TaskForm';
import { tasks } from './mockData';

describe("Task Form", () => {
    const mockSetTasks = jest.fn();
    const mockSetTaskInput = jest.fn();
    const mockIsEditing = jest.fn();
    beforeEach(() => {
        render(
            <TaskForm
                tasks={tasks}
                setTasks={mockSetTasks}
                setTaskInput={mockSetTaskInput}
                setIsEditing={mockIsEditing}
            />
        );
    })

    test('Add Task input renders correctly', () => {
        expect(screen.getByPlaceholderText('Add Task')).toBeInTheDocument();
    })

    test("onChange method is called when typing in the input field", () => {
        userEvent.type(screen.getByRole('textbox'), 'shopping')
        expect(mockSetTaskInput).toHaveBeenCalledTimes(8);
    })

    test("removeTask method is called when the 'bin' icon button is clicked", () => {
        userEvent.click(screen.getByTestId('btn-clear'));
        expect(mockSetTasks).toHaveBeenCalledTimes(1);
    })

    test("submitTask method is called when 'add' button is clicked", () => {
        userEvent.click(screen.getByTestId('btn-add'));
        expect(mockIsEditing).toHaveBeenCalledTimes(1);
        expect(mockSetTaskInput).toHaveBeenCalledTimes(1);
    })

    test("editTask method is called when 'edit' button is clicked", () => {
        cleanup();
        const isEditing = true;
        render(
            <TaskForm
                tasks={tasks}
                setTasks={mockSetTasks}
                setTaskInput={mockSetTaskInput}
                isEditing={isEditing}
                setIsEditing={mockIsEditing}
            />
        );
        userEvent.click(screen.getByTestId('btn-edit'));
        expect(mockIsEditing).toHaveBeenCalledTimes(1);
        expect(mockSetTaskInput).toHaveBeenCalledTimes(1);
    })
})
