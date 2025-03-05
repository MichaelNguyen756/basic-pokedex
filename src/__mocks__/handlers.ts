import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';
import { PokemonAPIURL } from '../helpers/api';

export const handlers = [
  http.get(`*/pokemon`, () => {
    return HttpResponse.json({
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
    });
  }),
  http.get(`*/pokemon/1`, () => {
    return HttpResponse.json({
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
    });
  }),
];

export const worker = setupWorker(
  http.get(`*/pokemon`, () => {
    return HttpResponse.json({
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
    });
  }),
);
