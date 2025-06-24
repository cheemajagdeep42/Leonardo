import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CharacterList, { CHARACTERS_QUERY } from '@/components/CharacterList';
import { MockedProvider } from '@apollo/client/testing';

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));


const mockData = {
    characters: {
        info: {
            pages: 2,
        },
        results: [
            {
                id: '1',
                name: 'Rick Sanchez',
                image: 'https://rick.png',
                status: 'Alive',
                species: 'Human',
            },
        ],
    },
};

const mocks = [
    {
        request: {
            query: CHARACTERS_QUERY,
            variables: { page: 1 },
        },
        result: {
            data: mockData,
        },
    },
];

describe('CharacterList', () => {

    it('renders characters and handles modal interaction', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CharacterList currentPage={1} />
            </MockedProvider>
        );

        expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Rick Sanchez'));
        expect(await screen.findByText(/Status:/)).toBeInTheDocument();
    });

    it('shows error message on API failure', async () => {
        render(
            <MockedProvider
                mocks={[
                    {
                        request: { query: CHARACTERS_QUERY, variables: { page: 1 } },
                        error: new Error('API Error'),
                    },
                ]}
                addTypename={false}
            >
                <CharacterList currentPage={1} />
            </MockedProvider>
        );

        expect(await screen.findByText(/Failed to load characters/i)).toBeInTheDocument();
    });
});
