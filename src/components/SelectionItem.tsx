import React, { ReactNode, MouseEventHandler } from 'react';

import StyledSelectionItem from './styled/SelectionItem';

function SelectionItem({
    children,
    onClickHandler,
    isSelected,
}: {
    children: ReactNode;
    onClickHandler: MouseEventHandler;
    isSelected: boolean;
}) {
    return (
        <StyledSelectionItem isSelected={isSelected} onClick={onClickHandler}>
            {children}
        </StyledSelectionItem>
    );
}

export default SelectionItem;
