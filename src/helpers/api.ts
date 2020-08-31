import _ from 'lodash';

import { filterByVersionGroup } from './filters';
import {
    PokemonAPIResourceList,
    IPokemonType,
    IPokemonAbility,
    IPokemonMove,
    IPokemonMoveVersion,
    IMoveAttribute,
} from '../types/api';

const PokemonAPIURL: string = 'https://pokeapi.co/api/v2';

export function getURL(): string {
    return `${PokemonAPIURL}/pokemon?limit=151`;
}

export async function GetPokemonJSONFromAPI(
    url: string = getURL(),
): Promise<PokemonAPIResourceList> {
    const response: Response = await fetch(url);
    return response.json();
}

export function getMoveList(moves: IPokemonMove[]): IPokemonMove[] {
    return moves.filter(({ version_group_details }: IPokemonMove) =>
        _.includes(
            version_group_details.map(
                ({ move_learn_method: { name } }: IPokemonMoveVersion) => name,
            ),
            'level-up',
        ),
    );
}

export function filterMoveList(moveList: IPokemonMove[]): IMoveAttribute[] {
    return moveList
        .filter(
            ({ version_group_details }: IPokemonMove) =>
                version_group_details.find(filterByVersionGroup) !== undefined,
        )
        .map(({ version_group_details, move }: IPokemonMove) => ({
            levelAt: version_group_details.find(filterByVersionGroup)?.level_learned_at,
            moveName: move.name,
        }));
}

export function getTypes(list: IPokemonType[]): string {
    return list.map(({ type }) => type.name).join(', ');
}

export function getAbilities(list: IPokemonAbility[]): string {
    return list.map(({ ability }) => ability.name).join(', ');
}
