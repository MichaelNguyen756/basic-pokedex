import React, { useReducer, useEffect } from 'react';
import Panel from './components/Panel';

import './styles/App.css';

import { initialState, UPDATE_INFO, UPDATE_LIST, Reducer } from './reducers/App';

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getPokemonInfo = (url, index) => {
    GetPokemonAPIJSON(url)
    .then(resultObj => {
      dispatch({ type: UPDATE_INFO, payload: { index: index, info: resultObj }})
    })
    .catch(() => console.error('Error fetching Pokemon Info'))
  }
  
  useEffect(() => {
    GetPokemonAPIJSON('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(resultObj => {
      dispatch({type: UPDATE_LIST, payload: resultObj.results});
    })
    .catch(() => console.error('Error fetching Pokemon API Resource'));
  }, []);

  return (
    <div className="App">
      <ul id="pokemonSelection">
        {state.PokemonList.map((pokemon, index) =>
          <li className="selector" data-selected={state.SelectedPokemonIndex === index} key={index} onClick={() => getPokemonInfo(pokemon.url, index)}>{pokemon.name}</li>
        )}
      </ul>
      {state.SelectedPokemonIndex != null && state.PokemonList.length > 0 &&
        <section id="pokemonInfoPanel">
          <Panel name={state.PokemonList[state.SelectedPokemonIndex].name} info={state.SelectedPokemonInfo} />
        </section>
      }
    </div>
  );
}

function GetPokemonAPIJSON(url) {
  return fetch(url).then(response => response.json())
}

export default App;
