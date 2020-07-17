import React from 'react';

import StyledInfoPanel from './styled/InfoPanel';

function InfoPanel({ children }) {
    return <StyledInfoPanel>{children}</StyledInfoPanel>;
}

export default InfoPanel;
