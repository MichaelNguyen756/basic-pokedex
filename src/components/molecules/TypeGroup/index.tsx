import React from 'react';

import TypeContainer from './TypeContainer';
import TypeIcon from '../../atoms/TypeIcon';

import { PokemonType } from '../../../types/api';

interface TypeGroupProps {
  types: PokemonType[];
}

function TypeGroup({ types }: TypeGroupProps) {
  return (
    <TypeContainer>
      {types.map(({ type: { name } }, index) => (
        <TypeIcon key={index} type={name} />
      ))}
    </TypeContainer>
  );
}

export default TypeGroup;
