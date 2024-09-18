import React, { useState } from 'react';

import Panel from './components/organisms/Panel';
import InfoPanel from './components/organisms/InfoPanel';
import SelectionMenuSection from './components/organisms/SelectionMenuSection';
import EmptySelectionSection from './components/atoms/EmptySelectionSection';

import StyledApp from './StyledApp';

function App() {
  const [{ name, url }, setPokemon] = useState({ name: '', url: '' });

  function handleClick(url: string, name: string) {
    setPokemon({ name, url });
  }

  return (
    <StyledApp>
      <SelectionMenuSection pokemonURL={url} onClick={handleClick} />
      <InfoPanel hasSelection={url !== ''}>
        {url === '' ? <EmptySelectionSection /> : <Panel pokemonURL={url} pokemonName={name} />}
      </InfoPanel>
    </StyledApp>
  );
}

export default App;
