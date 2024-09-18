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
