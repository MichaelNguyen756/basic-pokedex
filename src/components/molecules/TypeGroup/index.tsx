import React from 'react';
import styled from 'styled-components';

import TypeIcon from '../../atoms/TypeIcon';

import { PokemonType } from '../../../types/api';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function TypeGroup({ types }: { types: PokemonType[] }) {
  return (
    <Container>
      {types.map(({ type: { name } }, index) => (
        <TypeIcon key={index} type={name} />
      ))}
    </Container>
  );
}

export default TypeGroup;
