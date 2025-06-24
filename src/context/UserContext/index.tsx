'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserData {
    username: string;
    jobTitle: string;
}

interface UserContextType {
    userData: UserData | null;
    setUserData: (data: UserData | null) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [userData, setUserDataState] = useState<UserData | null>(null);

    useEffect(() => {
        const username = localStorage.getItem('username');
        const jobTitle = localStorage.getItem('jobTitle');

        if (username && jobTitle) {
            setUserDataState({ username, jobTitle });
        }
    }, []);

    const setUserData = (data: UserData | null) => {
        if (data) {
            localStorage.setItem('username', data.username);
            localStorage.setItem('jobTitle', data.jobTitle);
            setUserDataState(data);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('jobTitle');
            setUserDataState(null);
        }
    };
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};
