import React from 'react';
import styled from 'styled-components';

import { toUpperFirst } from '../../../helpers';
import { borderSetting, typeColours } from '../../constants';

function isAlternateFontColour(pokemonType: string, colourType: string) {
  return (
    (pokemonType === 'electric' ||
      pokemonType === 'ground' ||
      pokemonType === 'ice' ||
      pokemonType === 'steel') &&
    colourType === 'light'
  );
}

const StyledContainer = styled.div<{ $pokemonType: string }>`
  padding: 5px;
  background-color: ${({ $pokemonType }) =>
    $pokemonType ? typeColours[$pokemonType].default : 'transparent'};
  color: ${({ $pokemonType }) =>
    isAlternateFontColour($pokemonType, 'default') ? '#000000' : '#ffffff'};
  border: ${borderSetting};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0;
  font-weight: bold;
`;

export type TypeIconProps = {
  type: string;
};

function TypeIcon({ type }: TypeIconProps) {
  return <StyledContainer $pokemonType={type}>{toUpperFirst(type)}</StyledContainer>;
}

export default TypeIcon;
