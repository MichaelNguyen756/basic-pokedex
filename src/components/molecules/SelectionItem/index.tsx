import React from 'react';
import type { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

export type SelectionItemProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isSelected?: boolean;
  children?: ReactNode;
};

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

export default function SelectionItem({ onClick, isSelected, children }: SelectionItemProps) {
  return (
    <StyledButton $isSelected={isSelected} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
