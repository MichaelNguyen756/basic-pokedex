import {
  MoveAttribute,
  NamedAPIResourceList,
  Pokemon,
  PokemonAbility,
  PokemonMove,
} from '../types/api';

import { formatText, isVersionGroupRedBlue } from '.';

export const POKEMON_API_URL: string = 'https://pokeapi.co/api/v2';

const POKEMON_LIST_URL = `${POKEMON_API_URL}/pokemon?limit=151`;

export async function GetPokemonJSONFromAPI<T>(url: string = POKEMON_LIST_URL): Promise<T> {
  const response: Response = await fetch(url);
  return response.json();
}

export async function getPokemonURL(): Promise<NamedAPIResourceList> {
  return await GetPokemonJSONFromAPI();
}

export async function getPokemon(url: string): Promise<Pokemon> {
  return await GetPokemonJSONFromAPI(url);
}

/**
 * The function `getMoveList` filters a list of Pokemon moves to only include those learned through
 * leveling up.
 * @param {PokemonMove[]} moves - A list of Pokemon moves, each move containing information about the
 * version groups in which it can be learned and the method of learning.
 * @returns The `getMoveList` function returns an array of `PokemonMove` objects that have a
 * `move_learn_method` with the name 'level-up' in their `version_group_details`.
 */
export function getMoveList(moves: PokemonMove[]) {
  return moves.filter(({ version_group_details }) =>
    version_group_details
      .map(({ move_learn_method }) => move_learn_method.name)
      .includes('level-up'),
  );
}

/**
 * This TypeScript function filters and sorts a list of Pokemon moves based on their version group
 * details.
 * @param {PokemonMove[]} moveList - The `filterMoveList` function takes an array of `PokemonMove`
 * objects as input and filters the list based on certain criteria. It then maps the filtered list to a
 * new array of `MoveAttribute` objects and sorts them based on the level at which the move is learned
 * and the move name
 * @returns The `filterMoveList` function is returning a filtered and sorted list of Pokemon moves that
 * are specific to the Red/Blue version group. The function filters the input `moveList` based on
 * version group details, maps the filtered moves to a new format with move attributes, and then sorts
 * the resulting list based on the level at which the moves are learned and the move names.
 */
export function filterMoveList(moveList: PokemonMove[]) {
  return moveList
    .filter(
      ({ version_group_details }) =>
        version_group_details.find(isVersionGroupRedBlue) !== undefined,
    )
    .map(
      ({ version_group_details, move }) =>
        ({
          levelAt: version_group_details.find(isVersionGroupRedBlue)?.level_learned_at,
          moveName: move.name,
        }) as MoveAttribute,
    )
    .toSorted((a, b) => {
      const firstLevelAt = a.levelAt || 0;
      const secondLevelAt = b.levelAt || 0;

      if (firstLevelAt < secondLevelAt) {
        return -1;
      }

      if (firstLevelAt > secondLevelAt) {
        return 1;
      }

      if (a.moveName < b.moveName) {
        return -1;
      }

      if (a.moveName > b.moveName) {
        return 1;
      }

      return 0;
    });
}

/**
 * The function `getCommaSeparatedString` takes an array of elements and a callback function to format
 * each element as a string, then returns a comma-separated string of the formatted elements.
 * @param {T[]} list - The `list` parameter is an array of elements of type `T`.
 * @param formatStringCallback - The `formatStringCallback` parameter is a function that takes an
 * argument of type `T` and returns a string. This function is used to format each element of the
 * `list` before joining them into a comma-separated string.
 * @returns The `getCommaSeparatedString` function returns a string that contains the elements of the
 * input list, formatted using the provided `formatStringCallback` function, and separated by commas.
 */
export function getCommaSeparatedString<T>(
  list: T[],
  formatStringCallback: (arg: T) => string,
): string {
  return list.map(formatStringCallback).join(', ');
}

/**
 * The function `getAbilities` takes a list of Pokemon abilities and returns a comma-separated string
 * of their names.
 * @param {PokemonAbility[]} list - A list of Pokemon abilities.
 * @returns A comma-separated string of Pokemon ability names.
 */
export function getAbilities(list: PokemonAbility[]): string {
  return getCommaSeparatedString(list, ({ ability }) => formatText(ability.name));
}
