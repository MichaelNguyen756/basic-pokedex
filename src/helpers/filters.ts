import { PokemonMoveVersion } from '../types/api';

export function filterByVersionGroup(v: PokemonMoveVersion): boolean {
    return v.version_group.name === 'red-blue';
}
