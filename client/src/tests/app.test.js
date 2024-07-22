import React from 'react';
import App from '../App';
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('loads and displays titles', () => {
  render(<App />);
  expect(screen.getByText(/Docker tutorial/i)).toBeInTheDocument();
});
