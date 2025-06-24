import { render, screen } from '@testing-library/react';
import HomePage from '../page';
import { useUserContext } from '@/context/UserContext';

jest.mock('next/navigation', () => ({
    useRouter: () => ({ push: jest.fn() }),
}));

jest.mock('@/context/UserContext', () => ({
    useUserContext: jest.fn(),
}));

describe('HomePage', () => {
    it('renders nothing when userData is null', () => {
        (useUserContext as jest.Mock).mockReturnValue({ userData: null });

        const { container } = render(<HomePage />);
        expect(container).toBeEmptyDOMElement();
    });

    it('renders greeting and button when userData is present', () => {
        (useUserContext as jest.Mock).mockReturnValue({
            userData: { username: 'Jag', jobTitle: 'Engineer' },
        });

        render(<HomePage />);

        expect(screen.getByText(/hi jag, welcome/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /go to information page/i })).toBeInTheDocument();
    });
});
