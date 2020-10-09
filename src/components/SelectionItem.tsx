import React, { ReactElement, ReactNode, ReactNodeArray } from 'react';

import StyledSelectionItem from './styled/SelectionItem';

export interface SelectionItemProps {
  onClick?: () => void;
  isSelected: boolean;
  buttonText?: ReactNode;
  children?: ReactNode | ReactNodeArray;
}

function SelectionItem({ onClick, isSelected, children }: SelectionItemProps): ReactElement {
  return (
    <StyledSelectionItem isSelected={isSelected} onClick={onClick} role="button">
      {children}
    </StyledSelectionItem>
  );
}

export default SelectionItem;
