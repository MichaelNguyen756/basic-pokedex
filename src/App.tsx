import React, { ReactElement, useState } from 'react';

import Panel from './components/Panel';
// import InfoPanel from './components/InfoPanel';
import InfoPanel from './components/styled/InfoPanel';
import SelectionMenuSection from './components/SelectionMenuSection';
import EmptySelectionSection from './components/EmptySelectionSection';

import StyledApp from './StyledApp';

function App(): ReactElement {
  const [pokemonURL, setpokemonURL] = useState('');

  function handleClick(url: string) {
    setpokemonURL(url);
  }

  return (
    <StyledApp>
      <SelectionMenuSection pokemonURL={pokemonURL} onClick={handleClick} />
      <InfoPanel hasSelection={pokemonURL !== ''}>
        {pokemonURL === '' ? <EmptySelectionSection /> : <Panel pokemonURL={pokemonURL} />}
      </InfoPanel>
    </StyledApp>
  );
}

export default App;
