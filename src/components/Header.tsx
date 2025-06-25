'use client';
/**
 * Header Component
 *
 * Displays user information (username and job title) at the top of the app.
 * Also provides an "Edit Info" button that allows users to update their information.
 *
 */

import { Box, Flex, Button, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

interface HeaderProps {
    username: string;
    jobTitle: string;
    onEdit: () => void;
}

export default function Header({ onEdit }: HeaderProps) {
    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            px={4}
            py={2}
            bg="gray.50"
            borderBottom="1px solid"
            borderColor="gray.200"
        >
            <ChakraLink as={NextLink} href="/" fontWeight="bold" color="blue.500" _hover={{ textDecoration: 'none' }}>
                Home
            </ChakraLink>

            <Box>
                <Button size="sm" onClick={onEdit}>
                    Edit User Info
                </Button>
            </Box>
        </Flex>
    );
}
