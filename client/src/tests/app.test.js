import React from 'react';
import App from '../App';
import { render,screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

test('loads and displays titles', () => {
  render(<App />);
  expect(screen.getByText(/Docker tutorial/i)).toBeInTheDocument();
});

test('render product list', async () => {
  globalThis.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({data:[
        {name: 'Product 1', description: 'Description 1', price: 100},
      ]}),
    })
  );
  render(<App />);
  await waitFor(() => {
    const product1 = screen.getByText('Product 1');
    expect(product1).toBeInTheDocument();
  });
});