import { renderHook, act } from '@testing-library/react';
import { UserProvider, useUserContext } from '@/context/UserContext';

describe('UserContext', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('should update userData and save to localStorage', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <UserProvider>{children}</UserProvider>
        );

        const { result } = renderHook(() => useUserContext(), { wrapper });

        act(() => {
            result.current.setUserData({ username: 'Jag', jobTitle: 'Engineer' });
        });

        expect(result.current.userData).toEqual({ username: 'Jag', jobTitle: 'Engineer' });
        expect(localStorage.getItem('username')).toBe('Jag');
    });
});
