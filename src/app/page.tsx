'use client';

import { useUserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { Button, Box, Text } from '@chakra-ui/react';

export default function HomePage() {
  const { userData } = useUserContext();
  const router = useRouter();
  if (!userData) {
    return null;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      textAlign="center"
    >
      <Text fontSize="2xl" mb={4}>
        Hi {userData.username}, welcome!
      </Text>
      <Button colorScheme="blue" size="lg" onClick={() => router.push('/information?page=1')}>
        Go to Information Page
      </Button>
    </Box>
  );
}
