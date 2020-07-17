import React, { useReducer, useEffect } from 'react';

import Panel from './components/Panel';
import SelectionMenuSection from './components/SelectionMenuSection';
import SelectionItem from './components/SelectionItem';
import InfoPanel from './components/InfoPanel';
import EmptySelectionSection from './components/EmptySelectionSection';
import { GetPokemonJSONFromAPI } from './helpers/api';

import StyledApp from './StyledApp';

import {
    initialState,
    UPDATE_INFO,
    UPDATE_LIST,
    Reducer,
} from './reducers/App';

function App() {
    const [state, dispatch] = useReducer(Reducer, initialState);

    async function getPokemonInfo(url, index) {
        try {
            const resultObj = await GetPokemonJSONFromAPI(url);
            dispatch({
                type: UPDATE_INFO,
                payload: { index, info: resultObj },
            });
        } catch {
            console.error('Error fetching Pokemon Info');
        }
    }

    async function getInitialList() {
        try {
            const { results } = await GetPokemonJSONFromAPI();
            dispatch({ type: UPDATE_LIST, payload: results });
        } catch {
            console.error('Error fetching Pokemon API Resource');
        }
    }

    // Once rendered for the first time, then load the initial list once
    useEffect(() => {
        getInitialList();
    }, []);

    const { PokemonList, SelectedPokemonIndex, SelectedPokemonInfo } = state;
    const hasSelection = SelectedPokemonIndex != null && PokemonList.length > 0;

    return (
        <StyledApp>
            <SelectionMenuSection>
                {PokemonList.map(({ url, name }, index) => (
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
                {hasSelection && (
                    <Panel
                        name={PokemonList[SelectedPokemonIndex].name}
                        info={SelectedPokemonInfo}
                    />
                )}
                {!hasSelection && <EmptySelectionSection />}
            </InfoPanel>
        </StyledApp>
    );
}

export default App;
