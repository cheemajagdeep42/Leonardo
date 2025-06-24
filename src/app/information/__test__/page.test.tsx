import { render, screen } from '@testing-library/react';
import InformationPage from '../page';
import { MockedProvider } from '@apollo/client/testing';
import { CHARACTERS_QUERY } from '@/components/CharacterList';

jest.mock('next/navigation', () => ({
    useSearchParams: () => ({
        get: () => '1',
    }),
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

const mocks = [
    {
        request: {
            query: CHARACTERS_QUERY,
            variables: { page: 1 },
        },
        result: {
            data: {
                characters: {
                    info: { pages: 2 },
                    results: [
                        {
                            id: '1',
                            name: 'Rick Sanchez',
                            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                            status: 'Alive',
                            species: 'Human',
                        },
                    ],
                },
            },
        },
    },
];

describe('Information Page', () => {
    it('renders character data', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <InformationPage />
            </MockedProvider>
        );

        expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument();
    });
});
