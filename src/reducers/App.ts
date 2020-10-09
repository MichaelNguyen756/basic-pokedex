import { PokedexState, UPDATE_INFO, UPDATE_LIST, UpdateAPIActionTypes } from './types';

export const initialState: PokedexState = {
  PokemonList: [],
  SelectedPokemonIndex: null,
  SelectedPokemonInfo: undefined,
};

export function Reducer(
  state: PokedexState = initialState,
  action: UpdateAPIActionTypes,
): PokedexState {
  switch (action.type) {
    case UPDATE_LIST:
      return Object.assign({}, state, { PokemonList: action.payload });
    case UPDATE_INFO:
      return Object.assign({}, state, {
        SelectedPokemonIndex: action.payload.index,
        SelectedPokemonInfo: action.payload.info,
      });
    default:
      return state;
  }
}
