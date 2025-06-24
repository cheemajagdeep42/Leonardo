import { render, screen } from '@testing-library/react';
import { AppProviders } from '../providers';

jest.mock('@/lib/apollo', () => ({
    client: {},
}));

describe('AppProviders', () => {
    it('renders children inside all context providers', () => {
        render(
            <AppProviders>
                <div data-testid="child-content">Hello from inside</div>
            </AppProviders>
        );

        expect(screen.getByTestId('child-content')).toBeInTheDocument();
        expect(screen.getByText(/Hello from inside/i)).toBeInTheDocument();
    });
});
