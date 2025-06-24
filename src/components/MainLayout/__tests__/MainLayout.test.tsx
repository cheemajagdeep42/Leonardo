import { render, screen } from '@testing-library/react';
import MainLayout from '../index';
import { UserContext } from '@/context/UserContext';

describe('MainLayout', () => {
    it('shows modal and not the page content when userData is null', () => {
        render(
            <UserContext.Provider value={{ userData: null, setUserData: jest.fn() }}>
                <MainLayout>
                    <div>Page Content</div>
                </MainLayout>
            </UserContext.Provider>
        );

        expect(screen.queryByText(/Page Content/i)).not.toBeInTheDocument();
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('renders content when userData exists', () => {
        render(
            <UserContext.Provider
                value={{
                    userData: { username: 'Jag', jobTitle: 'Engineer' },
                    setUserData: jest.fn(),
                }}
            >
                <MainLayout>
                    <div>Page Content</div>
                </MainLayout>
            </UserContext.Provider>
        );

        expect(screen.getByText(/Page Content/i)).toBeInTheDocument();
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
});
