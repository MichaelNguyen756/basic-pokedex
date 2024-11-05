import React, { ComponentPropsWithoutRef, MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

export interface SelectionItemProps extends ComponentPropsWithoutRef<'button'> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isSelected?: boolean;
  buttonText?: ReactNode;
  children?: ReactNode;
}

const StyledButton = styled.button<{
  $isSelected?: boolean;
  children?: ReactNode;
}>`
  border-style: solid;
  padding: 5px 10px;
  background-color: ${({ $isSelected }) => ($isSelected ? 'coral' : 'transparent')};

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
    <StyledButton $isSelected={isSelected} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default SelectionItem;
