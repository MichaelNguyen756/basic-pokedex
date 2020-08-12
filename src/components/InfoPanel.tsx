import React from 'react';

import StyledInfoPanel from './styled/InfoPanel';

function InfoPanel({ hasSelection, children }) {
    return (
        <StyledInfoPanel hasSelection={hasSelection}>
            {children}
        </StyledInfoPanel>
    );
}

export default InfoPanel;
