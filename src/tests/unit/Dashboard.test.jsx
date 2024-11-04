// src/tests/unit/Dashboard.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../../components/Dashboard';

test('renders dashboard panels with correct data', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('Panel 1')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();

    expect(screen.getByText('Panel 2')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();

    expect(screen.getByText('Panel 3')).toBeInTheDocument();
    expect(screen.getByText('300')).toBeInTheDocument();

});
