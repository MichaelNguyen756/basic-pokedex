import React from 'react';
import Panel from './components/Panel';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      PokemonList: [],
      SelectedPokemonIndex: null,
      SelectedPokemonInfo: {}
    };

    this.getPokemonInfo = this.getPokemonInfo.bind(this);
  }

  componentWillMount() {
    GetPokemonAPIJSON('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(resultObj => {
      this.setState({ PokemonList: resultObj.results })
    })
    .catch(() => console.error('Error fetching Pokemon API Resource'));
  }

  getPokemonInfo(url, index) {
    GetPokemonAPIJSON(url)
    .then(resultObj => {
      this.setState({ SelectedPokemonIndex: index, SelectedPokemonInfo: resultObj })
    })
    .catch(() => console.error('Error fetching Pokemon Info'))
  }

  render() {
    const {
      PokemonList,
      SelectedPokemonIndex,
      SelectedPokemonInfo
    } = this.state;

    return (
      <div className="App">
        {/* <ul id="pokemonSelection">
          {PokemonList.map((pokemon, index) =>
            <li className="selector" data-selected={SelectedPokemonIndex === index} key={index} onClick={() => this.getPokemonInfo(pokemon.url, index)}>{pokemon.name}</li>
          )}
        </ul>
        {SelectedPokemonIndex !== null && PokemonList.length > 0 &&
          <section id="pokemonInfoPanel">
            <Panel name={PokemonList[SelectedPokemonIndex].name} info={SelectedPokemonInfo}></Panel>
          </section>
        } */}

        <table id="head">
        <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
            </tr>
          </thead>
        </table>
        <table>
          <tbody>
            {PokemonList.map((o, index) => 
              <tr>
                <td>{index}</td>
                <td>{o.name}</td>
              </tr>
            )}
          </tbody>
        </table>
        
      </div>
    );
  }
}

function GetPokemonAPIJSON(url) {
  return fetch(url).then(response => response.json())
}

export default App;
