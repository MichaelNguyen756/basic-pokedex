import _ from 'lodash';

import { filterByVersionGroup } from './filters';

const PokemonAPIURL = 'https://pokeapi.co/api/v2';

export function getURL() {
    return `${PokemonAPIURL}/pokemon?limit=151`;
}

export async function GetPokemonJSONFromAPI(url) {
    const parsedUrl = url || getURL();
    const response = await fetch(parsedUrl);
    return response.json();
}

export function getMoveList(moves) {
    return moves.filter(({ version_group_details }) =>
        _.includes(
            version_group_details.map(
                ({ move_learn_method: { name } }) => name,
            ),
            'level-up',
        ),
    );
}

export function filterMoveList(moveList) {
    return moveList
        .filter(
            ({ version_group_details }) =>
                version_group_details.find(filterByVersionGroup) !== undefined,
        )
        .map(({ version_group_details, move }) => ({
            levelAt: version_group_details.find(filterByVersionGroup)
                .level_learned_at,
            moveName: move.name,
        }));
}
