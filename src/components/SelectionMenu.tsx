import React, { ReactNode, ReactElement } from 'react';

import StyledSelectionMenu from './styled/SelectionMenu';

interface SelectionMenuProps {
    children: ReactNode;
}

function SelectionMenu({ children }: SelectionMenuProps): ReactElement {
    return <StyledSelectionMenu>{children}</StyledSelectionMenu>;
}

export default SelectionMenu;
