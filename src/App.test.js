import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('the word \'dog\' appears', () => {
  render(<App />);
  const dogElement = screen.getByText('dog');
  expect(dogElement).toBeInTheDocument();
})