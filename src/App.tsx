import React, { useState } from 'react';
import styled from 'styled-components';

import Panel from './components/organisms/Panel';
import InfoPanel from './components/organisms/InfoPanel';
import SelectionMenuSection from './components/organisms/SelectionMenuSection';
import EmptySelectionSection from './components/atoms/EmptySelectionSection';

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

function App() {
  const [pokemonUrl, setPokemonUrl] = useState('');

  const hasSelection = pokemonUrl !== '';

  function handleClick(url: string) {
    setPokemonUrl(url);
  }

  return (
    <StyledApp>
      <SelectionMenuSection pokemonURL={pokemonUrl} handleClick={handleClick} 
      />
      <InfoPanel $hasSelection={hasSelection}>
        {hasSelection ? <Panel pokemonURL={pokemonUrl}/> : <EmptySelectionSection />}
      </InfoPanel>
    </StyledApp>
  );
}

export default App;
