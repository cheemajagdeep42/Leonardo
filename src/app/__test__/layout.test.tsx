import { render, screen } from '@testing-library/react';
import { AppProviders } from '@/providers';
import MainLayout from '@/components/MainLayout';

jest.mock('@/lib/apollo', () => ({
    client: {},
}));

describe('AppProviders + MainLayout', () => {
    beforeEach(() => {
        localStorage.setItem('username', 'Jag');
        localStorage.setItem('jobTitle', 'Engineer');
    });

    it('renders children inside layout', () => {
        render(
            <AppProviders>
                <MainLayout>
                    <div>Test Content</div>
                </MainLayout>
            </AppProviders>
        );

        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });
});
