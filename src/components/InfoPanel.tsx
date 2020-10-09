import React, { ReactNode, ReactElement } from 'react';
import { Pokemon } from '../types/api';

import StyledInfoPanel from './styled/InfoPanel';

interface InfoPanelProps {
  selectedIndex?: number | null;
  children?: ReactNode;
  pokemonInfo?: Pokemon;
}

function InfoPanel({ selectedIndex, children }: InfoPanelProps): ReactElement {
  return <StyledInfoPanel hasSelection={selectedIndex !== null}>{children}</StyledInfoPanel>;
}

export default InfoPanel;
