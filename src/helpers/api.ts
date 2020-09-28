import _ from 'lodash';

import { filterByVersionGroup } from '.';
import {
    PokemonAPIResourceList,
    PokemonAbility,
    PokemonMove,
    PokemonMoveVersion,
    MoveAttribute,
} from '../types/api';
import { formatText } from './index';

export const PokemonAPIURL: string = 'https://pokeapi.co/api/v2';

export function getURL(): string {
    return `${PokemonAPIURL}/pokemon?limit=151`;
}

export async function GetPokemonJSONFromAPI(
    url: string = getURL(),
): Promise<PokemonAPIResourceList> {
    const response: Response = await fetch(url);
    return response.json();
}

export function getMoveList(moves: PokemonMove[]): PokemonMove[] {
    return moves.filter(({ version_group_details }: PokemonMove) =>
        _.includes(
            version_group_details.map(
                ({ move_learn_method: { name } }: PokemonMoveVersion) => name,
            ),
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
