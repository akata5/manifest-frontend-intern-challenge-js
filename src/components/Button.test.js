import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

// Test if button renders with default text
test('renders button with default text', () => {
  render(<Button />);
  const buttonElement = screen.getByText('Continue');
  expect(buttonElement).toBeInTheDocument();
});

// Test if button renders with custom text
test('renders button with custom text', () => {
  render(<Button>Click Me</Button>);
  const buttonElement = screen.getByText('Click Me');
  expect(buttonElement).toBeInTheDocument();
});

// Test primary button variant
test('renders primary button correctly', () => {
  render(<Button variant="primary">Primary Button</Button>);
  const buttonElement = screen.getByText('Primary Button');
  expect(buttonElement).toHaveClass('primary');
});

// Test secondary button variant
test('renders secondary button correctly', () => {
  render(<Button variant="secondary">Secondary Button</Button>);
  const buttonElement = screen.getByText('Secondary Button');
  expect(buttonElement).toHaveClass('secondary');
});

// Test text button variant
test('renders text button correctly', () => {
  render(<Button variant="text">Text Button</Button>);
  const buttonElement = screen.getByText('Text Button');
  expect(buttonElement).toHaveClass('text');
});

// Test disabled button
test('renders disabled button correctly', () => {
  render(<Button disabled={true}>Disabled Button</Button>);
  const buttonElement = screen.getByText('Disabled Button');
  expect(buttonElement).toBeDisabled();
});

// Test button click functionality
test('calls onClick when button is clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  const buttonElement = screen.getByText('Click Me');
  
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// Test disabled button doesn't call onClick
test('disabled button does not call onClick', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} disabled={true}>Disabled Button</Button>);
  const buttonElement = screen.getByText('Disabled Button');
  
  fireEvent.click(buttonElement);
  expect(handleClick).not.toHaveBeenCalled();
});

// Test inverted button
test('renders inverted button correctly', () => {
  render(<Button inverted={true}>Inverted Button</Button>);
  const buttonElement = screen.getByText('Inverted Button');
  expect(buttonElement).toHaveClass('inverted');
});

// Test button type attribute
test('sets button type correctly', () => {
  render(<Button type="submit">Submit Button</Button>);
  const buttonElement = screen.getByText('Submit Button');
  expect(buttonElement).toHaveAttribute('type', 'submit');
});

// Test default button type
test('sets default button type to button', () => {
  render(<Button>Default Type</Button>);
  const buttonElement = screen.getByText('Default Type');
  expect(buttonElement).toHaveAttribute('type', 'button');
});

// Test multiple classes applied together
test('applies multiple classes correctly', () => {
  render(<Button variant="secondary" inverted={true} fullWidth={true}>Multi Class Button</Button>);
  const buttonElement = screen.getByText('Multi Class Button');
  expect(buttonElement).toHaveClass('button');
  expect(buttonElement).toHaveClass('secondary');
  expect(buttonElement).toHaveClass('inverted');
  expect(buttonElement).toHaveClass('fullWidth');
});