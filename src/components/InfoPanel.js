import React from 'react';
import styled from 'styled-components';

const StyledInfoPanel = styled.section`
    flex: 1 1 0;
    border: 1px #000000 solid;
    height: 100%;
    overflow-y: scroll;
`;

function InfoPanel({children}) {
    return <StyledInfoPanel>{children}</StyledInfoPanel>;
}

export default InfoPanel;