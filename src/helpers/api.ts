import _ from 'lodash';

import { filterByVersionGroup } from './filters';
import {
    PokemonAPIResourceList,
    PokemonType,
    PokemonAbility,
    PokemonMove,
    PokemonMoveVersion,
    MoveAttribute,
} from '../types/api';
import { formatText } from './stringFormat';

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

export function getTypes(list: PokemonType[]): string {
    return list.map(({ type }) => formatText(type.name)).join(', ');
}

export function getAbilities(list: PokemonAbility[]): string {
    return list.map(({ ability }) => formatText(ability.name)).join(', ');
}
