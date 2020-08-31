import React, { useReducer, useEffect, Dispatch, ReactElement } from 'react';

import Panel from './components/Panel';
import SelectionMenuSection from './components/SelectionMenuSection';
import SelectionItem from './components/SelectionItem';
import InfoPanel from './components/InfoPanel';
import EmptySelectionSection from './components/EmptySelectionSection';
import { GetPokemonJSONFromAPI } from './helpers/api';

import StyledApp from './StyledApp';

import { initialState, Reducer } from './reducers/App';
import { updateInfo, updateList } from './reducers/actions';
import { PokedexState, UpdateAPIActionTypes } from './reducers/types';

function App(): ReactElement {
    const [state, dispatch]: [PokedexState, Dispatch<UpdateAPIActionTypes>] = useReducer(
        Reducer,
        initialState,
    );

    const getPokemonInfo = async (url: string, index: number): Promise<void> => {
        try {
            const resultObj = await GetPokemonJSONFromAPI(url);
            dispatch(updateInfo(index, resultObj));
        } catch {
            console.error('Error fetching Pokemon Info');
        }
    };

    const getInitialList = async (): Promise<void> => {
        try {
            const { results } = await GetPokemonJSONFromAPI();
            dispatch(updateList(results));
        } catch {
            console.error('Error fetching Pokemon API Resource');
        }
    };

    // Once rendered for the first time, then load the initial list once
    useEffect(() => {
        getInitialList();
    }, []);

    const { PokemonList, SelectedPokemonIndex, SelectedPokemonInfo } = state;
    const hasSelection: boolean = SelectedPokemonIndex != null && PokemonList.length > 0;

    return (
        <StyledApp>
            <SelectionMenuSection>
                {PokemonList.map(({ url, name }: { url: string; name: string }, index: number) => (
                    <SelectionItem
                        isSelected={SelectedPokemonIndex === index}
                        key={index}
                        onClickHandler={() => getPokemonInfo(url, index)}
                    >
                        {name}
                    </SelectionItem>
                ))}
            </SelectionMenuSection>
            <InfoPanel hasSelection={hasSelection}>
                {!hasSelection && <EmptySelectionSection />}
                {hasSelection && (
                    <Panel
                        name={PokemonList[SelectedPokemonIndex!].name}
                        info={SelectedPokemonInfo!}
                    />
                )}
            </InfoPanel>
        </StyledApp>
    );
}

export default App;
