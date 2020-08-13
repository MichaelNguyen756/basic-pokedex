import React, { ReactNode } from 'react';

import StyledSelectionMenu from './styled/SelectionMenu';

function SelectionMenu({ children }: { children: ReactNode }) {
    return <StyledSelectionMenu>{children}</StyledSelectionMenu>;
}

export default SelectionMenu;
