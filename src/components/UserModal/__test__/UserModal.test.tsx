import { render, screen, fireEvent } from '@testing-library/react';
import UserModal from '@/components/UserModal';

describe('UserModal', () => {
    const mockOnClose = jest.fn();
    const mockOnComplete = jest.fn();

    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    it('renders the modal when open', () => {
        render(
            <UserModal isOpen={true} onClose={mockOnClose} onComplete={mockOnComplete} />
        );

        expect(screen.getByText(/Enter Your Info/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Your name/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Your job title/i)).toBeInTheDocument();
    });


    it('saves data and calls onComplete on valid submit', () => {
        render(
            <UserModal isOpen={true} onClose={mockOnClose} onComplete={mockOnComplete} />
        );

        fireEvent.change(screen.getByPlaceholderText(/Your name/i), {
            target: { value: 'Jag' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Your job title/i), {
            target: { value: 'Engineer' },
        });

        const saveButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(saveButton);

        expect(localStorage.getItem('username')).toBe('Jag');
        expect(localStorage.getItem('jobTitle')).toBe('Engineer');
        expect(mockOnComplete).toHaveBeenCalledTimes(1);
    });
});
