'use client';
/**
 * CharacterList Component
 * This component fetches and displays a paginated list of characters using Apollo Client and the Rick and Morty GraphQL API.
 */

import {
    Box,
    Button,
    Flex,
    Grid,
    Image,
    Spinner,
    Text,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const CHARACTERS_QUERY = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        image
        status
        species
      }
    }
  }
`;

export default function CharacterList({ currentPage }: { currentPage: number }) {
    const router = useRouter();
    const [selected, setSelected] = useState<Character | undefined>();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { data, loading, error } = useQuery(CHARACTERS_QUERY, {
        variables: { page: currentPage },
    });

    const changePage = (page: number) => {
        router.push(`/information?page=${page}`);
    };

    type Character = {
        id: string;
        name: string;
        image: string;
        status: string;
        species: string;
    };

    const handleClick = (item: Character) => {
        setSelected(item);
        onOpen();
    };

    if (loading) {
        return (
            <Flex minH="60vh" justify="center" align="center">
                <Spinner size="xl" />
            </Flex>
        );
    }

    if (error) {
        return <Text color="red.500">Failed to load characters.</Text>;
    }

    const totalPages = data.characters.info.pages;

    return (
        <>
            <Text fontSize="2xl" mb={4}>Characters</Text>

            <Flex mb={6} justify="space-between">
                <Button onClick={() => changePage(currentPage - 1)} isDisabled={currentPage <= 1}>
                    Previous
                </Button>
                <Button onClick={() => changePage(currentPage + 1)} isDisabled={currentPage >= totalPages}>
                    Next
                </Button>
            </Flex>

            <Grid templateColumns="repeat(auto-fit, minmax(150px, 1fr))" gap={6}>
                {data.characters.results.map((char: Character) => (
                    <Box
                        key={char.id}
                        borderWidth="1px"
                        borderRadius="md"
                        overflow="hidden"
                        cursor="pointer"
                        onClick={() => handleClick(char)}
                    >
                        <Image src={char.image} alt={char.name} />
                        <Box p={2}>
                            <Text fontWeight="bold">{char.name}</Text>
                            <Text fontSize="sm" color="gray.500">
                                {char.species}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </Grid>

            <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{selected?.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src={selected?.image} alt={selected?.name} borderRadius="md" />
                        <Text mt={2}>Status: {selected?.status}</Text>
                        <Text>Species: {selected?.species}</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
