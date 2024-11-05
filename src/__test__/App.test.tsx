import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import { beforeAll, afterAll, afterEach, it, expect } from '@jest/globals';
import React from 'react';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

import App from '../App';
import { PokemonAPIURL } from '../helpers/api';

const pokemonResults = {
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
};

const pokemonStatistics = {
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
};

const server = setupServer(
  http.get('*/pokemon/1', () => HttpResponse.json(pokemonStatistics)),
  http.get('*/pokemon*', () => HttpResponse.json(pokemonResults)),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('renders without crashing', async () => {
  await act(() => {
    render(<App />);
  });
});

it('renders the initial message to select an option', async () => {
  await act(() => {
    render(<App />);
  });
  expect(screen.getByText(/select a Pokemon from the left-hand list/i)).toBeInTheDocument();
});

it('renders the title as the pokemon name when a button is selected', async () => {
  await act(() => {
    render(<App />);
  });

  expect(
    screen.getByRole('heading', { name: 'Select a Pokemon from the left-hand list' }),
  ).toBeInTheDocument();

  //  Check that the selection menu is loaded
  await waitFor(() => screen.getAllByRole('button'));
  fireEvent.click(
    screen.getByRole('button', { name: new RegExp(pokemonResults.results[0].name, 'i') }),
  );

  expect(screen.getByTitle(/loading menu/i)).toBeInTheDocument();

  //  Check for the Pokemon title
  await waitFor(() =>
    expect(screen.getByTitle(/pokemon name/i)).toHaveTextContent(
      new RegExp(pokemonStatistics.name, 'i'),
    ),
  );

  //  Check that the Sprite is there
  expect(screen.getByAltText(/sprite/i)).toBeInTheDocument();

  //  Check for the attributes section
  expect(screen.getByTitle(/attributes/i)).toBeInTheDocument();

  //  Check for the stat section
  expect(screen.getByTitle(/stat/i)).toBeInTheDocument();

  //  Check for the moves section
  expect(screen.getByTitle(/moves/i)).toBeInTheDocument();
});
