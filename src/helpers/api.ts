import _ from 'lodash';

import { filterByVersionGroup } from './filters';
import { PokemonNamedAPIResourceList } from '../types/api';

const PokemonAPIURL: string = 'https://pokeapi.co/api/v2';

export function getURL(): string {
    return `${PokemonAPIURL}/pokemon?limit=151`;
}

export async function GetPokemonJSONFromAPI(
    url: string = getURL(),
): Promise<PokemonNamedAPIResourceList> {
    const response: Response = await fetch(url);
    return response.json();
}

export function getMoveList(moves: any) {
    return moves.filter(({ version_group_details }: { version_group_details: any }) =>
        _.includes(
            version_group_details.map(
                ({ move_learn_method: { name } }: { move_learn_method: { name: any } }) => name,
            ),
            'level-up',
        ),
    );
}

export function filterMoveList(moveList: any) {
    return moveList
        .filter(
            ({ version_group_details }: { version_group_details: any }) =>
                version_group_details.find(filterByVersionGroup) !== undefined,
        )
        .map(({ version_group_details, move }: { version_group_details: any; move: any }) => ({
            levelAt: version_group_details.find(filterByVersionGroup).level_learned_at,
            moveName: move.name,
        }));
}
