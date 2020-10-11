import React, { ReactElement, useState } from 'react';

import Panel from './components/Panel';
import InfoPanel from './components/styled/InfoPanel';
import SelectionMenuSection from './components/SelectionMenuSection';
import EmptySelectionSection from './components/EmptySelectionSection';

import StyledApp from './StyledApp';

function App(): ReactElement {
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
