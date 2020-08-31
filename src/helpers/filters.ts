import { IPokemonMoveVersion } from '../types/api';

export function filterByVersionGroup(v: IPokemonMoveVersion): boolean {
    return v.version_group.name === 'red-blue';
}
