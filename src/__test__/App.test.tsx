import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import App from '../App';
import { PokemonAPIURL } from '../helpers/api';

const server = setupServer(
    rest.get(`${PokemonAPIURL}/pokemon`, (req, res, ctx) => {
        return res(
            ctx.json({
                count: 3,
                next: `${PokemonAPIURL}/pokemon?offset=20limit=20`,
                previous: null,
                results: [
                    {
                        name: 'bulbasaur',
                        url: `${PokemonAPIURL}/pokemon/1`,
                    },
                    {
                        name: 'ivysaur',
                        url: `${PokemonAPIURL}/pokemon/2`,
                    },
                    {
                        name: 'venusaur',
                        url: `${PokemonAPIURL}/pokemon/3`,
                    },
                ],
            }),
        );
    }),
    rest.get(`${PokemonAPIURL}/pokemon/1/`, (_req, res, ctx) => {
        return res(
            ctx.json({
                abilities: [
                    {
                        ability: {
                            name: 'overgrow',
                        },
                    },
                    {
                        ability: {
                            name: 'chlorophyll',
                        },
                    },
                ],
                id: 1,
                moves: [
                    {
                        move: {
                            name: 'vine-whip',
                        },
                        version_group_details: [
                            {
                                level_learned_at: 13,
                                move_learn_method: {
                                    name: 'level-up',
                                },
                                version_group: {
                                    name: 'red-blue',
                                },
                            },
                        ],
                    },
                ],
                name: 'bulbasaur',
                sprites: {
                    front_default: '#',
                },
                stats: [
                    {
                        base_stat: 45,
                        stat: { name: 'hp' },
                    },
                    {
                        base_stat: 49,
                        stat: { name: 'attack' },
                    },
                    {
                        base_stat: 49,
                        stat: { name: 'defense' },
                    },
                    {
                        base_stat: 65,
                        stat: { name: 'special-attack' },
                    },
                    {
                        base_stat: 65,
                        stat: { name: 'special-defense' },
                    },
                    {
                        base_stat: 45,
                        stat: { name: 'speed' },
                    },
                ],
                types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
            }),
        );
    }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the initial message to select an option', () => {
    const { getByText } = render(<App />);
    expect(getByText(/select a Pokemon from the left-hand list/i)).toBeInTheDocument();
});

it('renders the title as the pokemon name when a button is selected', async () => {
    render(<App />);

    expect(screen.getByTitle(/loading menu/i)).toBeInTheDocument();
    await waitFor(() => screen.getAllByRole('button'));

    fireEvent.click(screen.getByText('Bulbasaur'));

    await waitFor(() => screen.getByTitle(/pokemon name/i));

    expect(screen.getByTitle(/pokemon name/i)).toHaveTextContent('Bulbasaur');
});
