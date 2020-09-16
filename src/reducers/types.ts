import { PokemonAPIResourceList, PokemonAPIResource, Pokemon } from '../types/api';

export const UPDATE_LIST = 'UPDATE_LIST';
export const UPDATE_INFO = 'UPDATE_INFO';

export interface PokedexState {
    PokemonList: PokemonAPIResource[];
    SelectedPokemonIndex: number | null;
    SelectedPokemonInfo: Pokemon | null;
}

export interface UpdateInfoPayload {
    index: number;
    info: PokemonAPIResourceList;
}

export interface UpdateListAction {
    type: typeof UPDATE_LIST;
    payload: PokemonAPIResource[];
}

export interface UpdateInfoAction {
    type: typeof UPDATE_INFO;
    payload: UpdateInfoPayload;
}

export type UpdateAPIActionTypes = UpdateInfoAction | UpdateListAction;
