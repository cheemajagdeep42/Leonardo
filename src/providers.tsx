'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo';
import { UserProvider } from '@/context/UserContext';

export function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider>
            <ApolloProvider client={client}>
                <UserProvider>{children}</UserProvider>
            </ApolloProvider>
        </ChakraProvider>
    );
}
