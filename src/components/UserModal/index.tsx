'use client';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface UserModalProps {
    onComplete: () => void;
    isOpen: boolean;
    onClose: () => void;
}

export default function UserModal({ onComplete, isOpen, onClose }: UserModalProps) {
    const [username, setUsername] = useState('');
    const [jobTitle, setJobTitle] = useState('');

    useEffect(() => {
        const savedUsername = localStorage.getItem('username') || '';
        const savedJobTitle = localStorage.getItem('jobTitle') || '';
        setUsername(savedUsername);
        setJobTitle(savedJobTitle);
    }, [isOpen]);

    const handleSubmit = () => {
        localStorage.setItem('username', username);
        localStorage.setItem('jobTitle', jobTitle);
        onClose();
        onComplete();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{`Enter Your Info`}</ModalHeader>
                <ModalBody>
                    <FormControl mb={4}>
                        <FormLabel htmlFor="username">User Name</FormLabel>
                        <Input
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Your name"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="jobTitle">Job Title</FormLabel>
                        <Input
                            id="jobTitle"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            placeholder="Your job title"
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" onClick={handleSubmit} isDisabled={!username || !jobTitle}>
                        Submit
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
