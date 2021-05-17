import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe("App", () => {
    test('Renders correctly', () => {
        render(<App />);
        expect(screen.getByText(/Start adding items to your list/)).toBeInTheDocument();
    })
})
