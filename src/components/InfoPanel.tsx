import React, { ReactNode } from 'react';

import StyledInfoPanel from './styled/InfoPanel';

function InfoPanel({
    hasSelection,
    children,
}: {
    hasSelection: boolean;
    children: ReactNode;
}) {
    return (
        <StyledInfoPanel hasSelection={hasSelection}>
            {children}
        </StyledInfoPanel>
    );
}

export default InfoPanel;
