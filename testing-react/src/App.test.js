import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial colot and chage color when clicked', () => {
  render(<App/>);
  const colorBtn = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });
  
  fireEvent.click(colorBtn);
  expect(colorBtn).toHaveStyle({ backgroundColor : 'blue' });
  expect(colorBtn.textContent).toBe('Change to red');
});


