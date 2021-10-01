import { render, screen } from '@testing-library/react';
import App from './App';

test('renders and h1', () => {
  const {getByText} = render(<App/>);
  const h1 = getByText(/Ricardo's Kitchen/);
  expect(h1).toHaveTextContent("Ricardo's Kitchen");
})