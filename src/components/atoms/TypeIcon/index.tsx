import React from 'react';
import styled from 'styled-components';

import { toUpperFirst } from '../../../helpers';
import { BORDER_SETTING, POKEMON_TYPES, TYPE_COLOURS } from '../../constants';

const ALTERNATE_FONT_COLOUR_TYPES = new Set([
  POKEMON_TYPES.ELECTRIC,
  POKEMON_TYPES.GROUND,
  POKEMON_TYPES.ICE,
  POKEMON_TYPES.STEEL,
]);

function isAlternateFontColour(pokemonType: string, colourType: string) {
  return ALTERNATE_FONT_COLOUR_TYPES.has(pokemonType) && colourType === 'light';
}

const StyledContainer = styled.div<{ $pokemonType: string }>`
  padding: 5px;
  background-color: ${({ $pokemonType }) =>
    $pokemonType ? TYPE_COLOURS[$pokemonType].default : 'transparent'};
  color: ${({ $pokemonType }) =>
    isAlternateFontColour($pokemonType, 'default') ? '#000000' : '#ffffff'};
  border: ${BORDER_SETTING};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0;
  font-weight: bold;
`;

export default function TypeIcon({ type }: { type: string }) {
  return <StyledContainer $pokemonType={type}>{toUpperFirst(type)}</StyledContainer>;
}
