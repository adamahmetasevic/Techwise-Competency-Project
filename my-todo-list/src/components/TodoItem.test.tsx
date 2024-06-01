//import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import TodoItem from './TodoItem';

test('renders TodoItem component', () => {
  render(<TodoItem id={1} description="Test Todo" completed={false} onEdit={() => {}} onComplete={() => {}} onDelete={() => {}} />);
  const todoElement = screen.getByText(/Test Todo/i);
  expect(todoElement).toBeInTheDocument();
});
