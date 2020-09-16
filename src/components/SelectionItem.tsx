import React, { ReactElement, ReactNode, ReactNodeArray } from 'react';

import StyledSelectionItem from './styled/SelectionItem';

export interface SelectionItemProps {
    onClickHandler?: () => void;
    isSelected: boolean;
    buttonText?: ReactNode;
    children?: ReactNode | ReactNodeArray;
}

function SelectionItem({
    onClickHandler,
    isSelected,
    buttonText,
    children,
}: SelectionItemProps): ReactElement {
    return (
        <StyledSelectionItem isSelected={isSelected} onClick={onClickHandler}>
            {buttonText}
            {children}
        </StyledSelectionItem>
    );
}

export default SelectionItem;
