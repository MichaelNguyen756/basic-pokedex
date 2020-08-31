import { UPDATE_INFO, UPDATE_LIST, IUpdateInfoAction, IUpdateListAction } from './types';
import { PokemonAPIResource, PokemonAPIResourceList } from '../types/api';

export function updateList(newList: PokemonAPIResource[]): IUpdateListAction {
    return {
        type: UPDATE_LIST,
        payload: newList,
    };
}

export function updateInfo(newIndex: number, newInfo: PokemonAPIResourceList): IUpdateInfoAction {
    return {
        type: UPDATE_INFO,
        payload: {
            index: newIndex,
            info: newInfo,
        },
    };
}
