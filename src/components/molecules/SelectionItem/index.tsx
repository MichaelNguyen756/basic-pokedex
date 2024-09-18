import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { borderSetting } from '../../constants';

export interface SelectionItemProps {
  onClick?: () => void;
  isSelected?: boolean;
  buttonText?: ReactNode;
  children?: ReactNode;
}

const StyledButton = styled.button<{
  isSelected?: boolean;
  children?: ReactNode;
}>`
  border-style: solid;
  padding: 5px 10px;
  background-color: ${({ isSelected }) => (isSelected ? 'coral' : 'transparent')};

  &:last-child::not(:only-child) {
    border-bottom: 0;
  }

  &:hover {
    background-color: #61dafb;
    cursor: pointer;
  }
`;

function SelectionItem({ onClick, isSelected, children }: SelectionItemProps) {
  return (
    <StyledButton isSelected={isSelected} onClick={onClick} role="button">
      {children}
    </StyledButton>
  );
}

export default SelectionItem;
