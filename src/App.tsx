import React, { useReducer, useEffect, Dispatch, ReactElement } from 'react';

import Panel from './components/Panel';
import InfoPanel from './components/InfoPanel';
import SelectionMenuSection from './components/SelectionMenuSection';
import EmptySelectionSection from './components/EmptySelectionSection';

import StyledApp from './StyledApp';

import { updateList } from './reducers/actions';
import useIsMountedRef from './hooks/useIsMountedRef';
import { GetPokemonJSONFromAPI } from './helpers/api';
import { initialState, Reducer } from './reducers/App';
import { PokedexState, UpdateAPIActionTypes } from './reducers/types';

function App(): ReactElement {
    const [state, dispatch]: [PokedexState, Dispatch<UpdateAPIActionTypes>] = useReducer(
        Reducer,
        initialState,
    );

    const isMountedRef = useIsMountedRef();

    // Once rendered for the first time, then load the initial list once
    useEffect(() => {
        const getInitialList = async (): Promise<void> => {
            try {
                const { results } = await GetPokemonJSONFromAPI();
                if (isMountedRef.current) {
                    dispatch(updateList(results));
                }
            } catch (error) {
                console.error(`Error fetching Pokemon API Resource. Error: ${error}`);
            }
        };

        isMountedRef.current = true;
        getInitialList();
        return () => {
            isMountedRef.current = false;
        };
    }, [isMountedRef]);

    const { PokemonList, SelectedPokemonIndex, SelectedPokemonInfo } = state;

    return (
        <StyledApp>
            <SelectionMenuSection
                menuItemList={PokemonList}
                selectedIndex={SelectedPokemonIndex}
                dispatch={dispatch}
            />
            <InfoPanel hasSelection={!!SelectedPokemonInfo}>
                {SelectedPokemonInfo ? (
                    <Panel info={SelectedPokemonInfo} />
                ) : (
                    <EmptySelectionSection />
                )}
            </InfoPanel>
        </StyledApp>
    );
}

export default App;
