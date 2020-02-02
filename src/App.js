import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import Panel from './components/Panel';
import SelectionMenu from './components/SelectionMenu';
import SelectionItem from './components/SelectionItem';
import InfoPanel from './components/InfoPanel';

import { initialState, UPDATE_INFO, UPDATE_LIST, Reducer } from './reducers/App';

const StyledApp = styled.div`
  text-align: center;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

async function GetPokemonAPIJSON(url) {
  const response = await fetch(url);
  return response.json();
}

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getPokemonInfo = async (url, index) => {
    try {
      const resultObj = await GetPokemonAPIJSON(url);  
      dispatch({ type: UPDATE_INFO, payload: { index: index, info: resultObj }})
    } catch {
      console.error('Error fetching Pokemon Info')
    }
  }

  const updateList = async () => {
    try {
      const resultObj = await GetPokemonAPIJSON('https://pokeapi.co/api/v2/pokemon?limit=151');
      dispatch({type: UPDATE_LIST, payload: resultObj.results});
    } catch {
      console.error('Error fetching Pokemon API Resource')
    }
  }
  
  // Once rendered for the first time, then load the initial list once
  useEffect(() => { updateList(); }, []);

  return (
    <StyledApp>
      <SelectionMenu>
        {state.PokemonList.map((pokemon, index) =>
          <SelectionItem
            isSelected={state.SelectedPokemonIndex === index}
            key={index}
            onClickHandler={() => getPokemonInfo(pokemon.url, index)}
          >
            {pokemon.name}
          </SelectionItem>
        )}
      </SelectionMenu>
      <InfoPanel>
        {state.SelectedPokemonIndex != null && state.PokemonList.length > 0 &&
          <Panel
            name={state.PokemonList[state.SelectedPokemonIndex].name}
            info={state.SelectedPokemonInfo}
          />
        }
      </InfoPanel>
    </StyledApp>
  );
}

export default App;
