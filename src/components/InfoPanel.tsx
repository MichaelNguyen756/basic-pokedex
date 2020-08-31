import React, { ReactNode, ReactElement } from 'react';

import StyledInfoPanel from './styled/InfoPanel';

interface InfoPanelProps {
    hasSelection: boolean;
    children: ReactNode;
}

function InfoPanel({ hasSelection, children }: InfoPanelProps): ReactElement {
    return <StyledInfoPanel hasSelection={hasSelection}>{children}</StyledInfoPanel>;
}

export default InfoPanel;
