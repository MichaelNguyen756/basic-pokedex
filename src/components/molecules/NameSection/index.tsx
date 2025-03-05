import React from 'react';
import styled from 'styled-components';

import PokemonName from '../PokemonName';

const StyledSection = styled.section`
  flex: 0 0 auto;
  font-size: 2em;
  font-weight: bold;
  color: #ffffff;
  background-color: brown;
  position: sticky;
  top: 0;
`;

export default function NameSection({ name }: { name: string }) {
  return (
    <StyledSection title="Pokemon Name">
      <PokemonName name={name} />
    </StyledSection>
  );
}
