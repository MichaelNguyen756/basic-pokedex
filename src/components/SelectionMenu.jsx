import React from 'react';
import StyledMenu from './styled/SelectionMenu';

function SelectionMenu({ children }) {
    return <StyledMenu>{children}</StyledMenu>;
}

export default SelectionMenu;
