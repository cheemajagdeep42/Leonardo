'use client';

import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box
            as="footer"
            position="fixed"
            bottom={0}
            left={0}
            width="100%"
            py={3}
            px={6}
            bg="gray.100"
            borderTop="1px solid"
            borderColor="gray.200"
            textAlign="center"
            zIndex={10}
        >
            <Text fontSize="sm" color="gray.600">
                Challenge Version: v3.5
            </Text>
        </Box>
    );
}