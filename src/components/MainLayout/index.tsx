import { useUserContext } from '@/context/UserContext';
import { useEffect, useState } from 'react';
import UserModal from '@/components/UserModal';
import Header from '@/components/Header';
import { Box } from '@chakra-ui/react';
import Footer from '@/components/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const { userData, setUserData } = useUserContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!userData) {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false);
        }
    }, [userData]);

    const handleModalComplete = () => {
        const username = localStorage.getItem('username');
        const jobTitle = localStorage.getItem('jobTitle');
        if (username && jobTitle) {
            setUserData({ username, jobTitle });
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <UserModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onComplete={handleModalComplete}
            />

            {userData && (
                <Header
                    username={userData.username}
                    jobTitle={userData.jobTitle}
                    onEdit={() => setIsModalOpen(true)}
                />
            )}

            <Box flex="1">
                {userData ? children : null}
            </Box>
            <Footer />
        </>
    );
}
