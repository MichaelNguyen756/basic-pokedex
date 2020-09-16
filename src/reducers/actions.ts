import { UPDATE_INFO, UPDATE_LIST, UpdateInfoAction, UpdateListAction } from './types';
import { PokemonAPIResource, PokemonAPIResourceList } from '../types/api';

export function updateList(newList: PokemonAPIResource[]): UpdateListAction {
    return {
        type: UPDATE_LIST,
        payload: newList,
    };
}

export function updateInfo(newIndex: number, newInfo: PokemonAPIResourceList): UpdateInfoAction {
    return {
        type: UPDATE_INFO,
        payload: {
            index: newIndex,
            info: newInfo,
        },
    };
}
