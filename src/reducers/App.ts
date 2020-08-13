import { Action, ActionType } from '../types/reducer';

export const initialState = {
    PokemonList: [],
    SelectedPokemonIndex: null,
    SelectedPokemonInfo: {},
};

export const UPDATE_LIST = 'UPDATE_LIST';
export const UPDATE_INFO = 'UPDATE_INFO';

export function Reducer(state = initialState, action: Action) {
    //  Doing destructuring here to be explicit in the parameters about state and action
    const { type, payload }: { type: ActionType; payload: any } = action;
    switch (type) {
        case UPDATE_LIST:
            return Object.assign({}, state, { PokemonList: payload });
        case UPDATE_INFO:
            return Object.assign({}, state, {
                SelectedPokemonIndex: payload.index,
                SelectedPokemonInfo: payload.info,
            });
        default:
            return state;
    }
}
