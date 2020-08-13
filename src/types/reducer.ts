export type ActionType = 'UPDATE_LIST' | 'UPDATE_INFO';

export interface Action {
    type: ActionType;
    payload: any;
}
