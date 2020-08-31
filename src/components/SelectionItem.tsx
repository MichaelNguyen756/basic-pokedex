import React, { ReactNode, MouseEventHandler, ReactElement } from 'react';

import StyledSelectionItem from './styled/SelectionItem';

interface SelectionItemProps {
    children: ReactNode;
    onClickHandler: MouseEventHandler;
    isSelected: boolean;
}

function SelectionItem({ children, onClickHandler, isSelected }: SelectionItemProps): ReactElement {
    return (
        <StyledSelectionItem isSelected={isSelected} onClick={onClickHandler}>
            {children}
        </StyledSelectionItem>
    );
}

export default SelectionItem;
