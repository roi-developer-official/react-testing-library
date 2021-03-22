import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial colot and chage color when clicked', () => {
  render(<App />);
  const colorBtn = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });
  
  fireEvent.click(colorBtn);
  expect(colorBtn).toHaveStyle({ backgroundColor : 'blue' });
  expect(colorBtn.textContent).toBe('Change to red');
});

test('initial conditions', ()=>{
  render(<App />);
  const colorBtn = screen.getByRole('button', { name : 'Change to blue' });
  expect(colorBtn).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();

});

test('button is disabled when checkbox is checked an enable when checkbox unchecked',()=>{
  render(<App />);
  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name : 'Disable button' });

  fireEvent.click(checkBox);
  expect(colorBtn).toBeDisabled();
  fireEvent.click(checkBox);
  expect(colorBtn).toBeEnabled();
});

test('disabled button has gray background an revert to red',()=>{
  render(<App />)
  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name : 'Disable button' });

  fireEvent.click(checkBox);
  expect(colorBtn).toHaveStyle('background-color: gray');
  fireEvent.click(checkBox);
  expect(colorBtn).toHaveStyle('background-color: red');
});

test('disabled button has gray background and revert to blue', ()=>{
  render(<App />)
  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name : 'Disable button' });

  fireEvent.click(colorBtn);
  fireEvent.click(checkBox);
  expect(colorBtn).toHaveStyle('background-color: gray')
  fireEvent.click(checkBox);
  expect(colorBtn).toHaveStyle('background-color: blue')
});
