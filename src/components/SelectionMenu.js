import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.ul`
    height: 100%;
    padding-inline-start: 0px;
    flex: 0 0 auto;
    overflow-y: scroll;
`;

function SelectionMenu({children}) {
    return <StyledMenu>{children}</StyledMenu>;
}

export default SelectionMenu;