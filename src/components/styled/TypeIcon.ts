import styled from 'styled-components';

import { typeColours, borderSetting } from './constants';

export function isAlternateFontColour(pokemonType: string, colourType: string) {
  return (
    (pokemonType === 'electric' ||
      pokemonType === 'ground' ||
      pokemonType === 'ice' ||
      pokemonType === 'steel') &&
    colourType === 'light'
  );
}

export interface TypeIconProps {
  pokemonType: string;
}

const colourType = 'default';

const TypeIcon = styled.div<TypeIconProps>`
  padding: 5px;
  background-color: ${({ pokemonType }) =>
    pokemonType ? typeColours[pokemonType][colourType] : 'transparent'};
  color: ${({ pokemonType }) =>
    isAlternateFontColour(pokemonType, colourType) ? '#000000' : '#ffffff'};
  border: ${borderSetting};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0;
  font-weight: bold;
`;

export default TypeIcon;
