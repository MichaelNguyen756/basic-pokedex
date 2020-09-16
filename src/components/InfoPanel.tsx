import React, { ReactNode, ReactElement } from 'react';
import { Pokemon } from '../types/api';

import StyledInfoPanel from './styled/InfoPanel';

interface InfoPanelProps {
    hasSelection: boolean;
    children: ReactNode;
    pokemonInfo?: Pokemon;
}

function InfoPanel({ hasSelection, children }: InfoPanelProps): ReactElement {
    return <StyledInfoPanel hasSelection={hasSelection}>{children}</StyledInfoPanel>;
}

export default InfoPanel;
