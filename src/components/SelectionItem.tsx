import React from 'react';

import StyledSelectionItem from './styled/SelectionItem';

function SelectionItem({ children, onClickHandler, isSelected }) {
    return (
        <StyledSelectionItem isSelected={isSelected} onClick={onClickHandler}>
            {children}
        </StyledSelectionItem>
    );
}

export default SelectionItem;
