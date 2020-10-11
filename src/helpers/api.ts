import _ from 'lodash';

import { filterByVersionGroup } from '.';
import {
  PokemonAPIResourceList,
  PokemonAbility,
  PokemonMove,
  PokemonMoveVersion,
  MoveAttribute,
  Pokemon,
} from '../types/api';
import { formatText } from './index';

export const PokemonAPIURL: string = 'https://pokeapi.co/api/v2';

export function getURL(): string {
  return `${PokemonAPIURL}/pokemon?limit=151`;
}

export async function GetPokemonJSONFromAPI<T>(url: string = getURL()): Promise<T> {
  const response: Response = await fetch(url);
  return response.json();
}

export async function getPokemonURL(): Promise<PokemonAPIResourceList> {
  return await GetPokemonJSONFromAPI();
}

export async function getPokemon(url: string): Promise<Pokemon> {
  return await GetPokemonJSONFromAPI(url);
}

export function getMoveList(moves: PokemonMove[]): PokemonMove[] {
  return moves.filter(({ version_group_details }: PokemonMove) =>
    _.includes(
      version_group_details.map(({ move_learn_method: { name } }: PokemonMoveVersion) => name),
      'level-up',
    ),
  );
}

export function filterMoveList(moveList: PokemonMove[]): MoveAttribute[] {
  return moveList
    .filter(
      ({ version_group_details }: PokemonMove) =>
        version_group_details.find(filterByVersionGroup) !== undefined,
    )
    .map(({ version_group_details, move }: PokemonMove) => ({
      levelAt: version_group_details.find(filterByVersionGroup)?.level_learned_at,
      moveName: move.name,
    }));
}

export function getCommaSeparatedString<T>(
  list: T[],
  formatStringCallback: (arg: T) => string,
): string {
  return list.map(formatStringCallback).join(', ');
}

export function getAbilities(list: PokemonAbility[]): string {
  return getCommaSeparatedString(list, ({ ability }) => formatText(ability.name));
}
