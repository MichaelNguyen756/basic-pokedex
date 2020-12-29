import React, { ReactElement } from 'react';
import PokemonName from '../PokemonName';

import StyledNameSection from './styled';

interface NameSectionProps {
  name: string;
}

function NameSection({ name }: NameSectionProps): ReactElement {
  return (
    <StyledNameSection title="Pokemon Name">
      <PokemonName name={name} />
    </StyledNameSection>
  );
}

export default NameSection;
