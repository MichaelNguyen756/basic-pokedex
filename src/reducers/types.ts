import { PokemonAPIResourceList, PokemonAPIResource, IPokemon } from '../types/api';

export const UPDATE_LIST = 'UPDATE_LIST';
export const UPDATE_INFO = 'UPDATE_INFO';

export interface PokedexState {
    PokemonList: PokemonAPIResource[];
    SelectedPokemonIndex: number | null;
    SelectedPokemonInfo: IPokemon | null;
}

export interface IUpdateInfoPayload {
    index: number;
    info: PokemonAPIResourceList;
}

export interface IUpdateListAction {
    type: typeof UPDATE_LIST;
    payload: PokemonAPIResource[];
}

export interface IUpdateInfoAction {
    type: typeof UPDATE_INFO;
    payload: IUpdateInfoPayload;
}

export type UpdateAPIActionTypes = IUpdateInfoAction | IUpdateListAction;
