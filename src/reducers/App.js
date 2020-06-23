export const initialState = {
    PokemonList: [],
    SelectedPokemonIndex: null,
    SelectedPokemonInfo: {},
};

export const UPDATE_LIST = 'UPDATE_LIST';
export const UPDATE_INFO = 'UPDATE_INFO';

export function Reducer(state = initialState, action) {
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
