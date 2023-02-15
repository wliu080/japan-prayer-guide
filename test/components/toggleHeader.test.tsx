import { render, fireEvent } from '@testing-library/react';
import { ToggleHeader } from '../../components/toggleHeader';

describe('ToggleHeader', () => {
  test('renders a Navbar with a white background and light variant by default', () => {
    const { getByRole } = render(<ToggleHeader />);
    const navbar = getByRole('navigation');
    expect(navbar).toHaveClass('bg-white');
    expect(navbar).toHaveClass('navbar-light');
  });

  test('clicking the Navbar.Toggle toggles the color scheme to the dark variant', () => {
    const { getByRole } = render(<ToggleHeader />);
    const toggleButton = getByRole('button', { name: 'Toggle navigation' });
    fireEvent.click(toggleButton);
    const navbar = getByRole('navigation');
    expect(navbar).toHaveClass('bg-primary');
    expect(navbar).toHaveClass('navbar-dark');
  });

  test('clicking the Navbar.Toggle twice toggles the color scheme back to the light variant', () => {
    const { getByRole } = render(<ToggleHeader />);
    const toggleButton = getByRole('button', { name: 'Toggle navigation' });
    fireEvent.click(toggleButton);
    fireEvent.click(toggleButton);
    const navbar = getByRole('navigation');
    expect(navbar).toHaveClass('bg-white');
    expect(navbar).toHaveClass('navbar-light');
  });
});

