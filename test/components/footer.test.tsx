import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../../components/footer';

describe('Footer', () => {
    test('Renders the correct class name on the outer container', () => {
        render(<Footer/>)
        const footer = screen.getByTestId('footer')
        expect(footer).toHaveClass('bg-primary')
        expect(footer).toHaveClass('container-fluid')
    })
})