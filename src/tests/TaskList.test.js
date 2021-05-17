import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from '../components/TaskList';
import { tasks } from './mockData';

describe("Task List", () => {
    test("Renders tasks correctly", () => {
        render(<TaskList tasks={tasks} />)
        expect(screen.getAllByTestId('todo-item')[0]).toHaveTextContent('clean flat');
        expect(screen.getAllByTestId('todo-item')).toHaveLength(3);
    })
})
