import React, { ReactElement } from 'react';
import { toUpperFirst } from '../../../helpers';

import StyledTypeIcon from './TypeIcon';

export interface TypeIconProps {
  type: string;
}

function TypeIcon({ type }: TypeIconProps): ReactElement {
  return <StyledTypeIcon pokemonType={type}>{toUpperFirst(type)}</StyledTypeIcon>;
}

export default TypeIcon;
