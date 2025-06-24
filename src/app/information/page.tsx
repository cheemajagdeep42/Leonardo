'use client';

import { useSearchParams } from 'next/navigation';
import { Box } from '@chakra-ui/react';
import CharacterList from '@/components/CharacterList';

export default function InformationPage() {
    const searchParams = useSearchParams();
    const pageParam = searchParams.get('page');
    const page = pageParam ? parseInt(pageParam, 10) : 1;

    return (
        <Box p={4}>
            <CharacterList currentPage={page} />
        </Box>
    );
}
