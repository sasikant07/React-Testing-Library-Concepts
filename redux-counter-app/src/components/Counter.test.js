import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Counter from './Counter';

const renderWithRedux = (component) => {
  return render(<Provider store={store}>{component}</Provider>);
};

test('should render counter value and buttons', () => {
  renderWithRedux(<Counter />);
  
  // Check initial counter value
  expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();

  // Increment button works
  fireEvent.click(screen.getByText(/Increment/i));
  expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();

  // Decrement button works
  fireEvent.click(screen.getByText(/Decrement/i));
  expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
});
