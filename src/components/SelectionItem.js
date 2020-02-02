import React from 'react';
import styled, { css } from 'styled-components';

const StyledItem = styled.li`
    border-bottom: 1px #000000 solid;
    list-style: none;
    border-left: 1px #000000 solid;
    border-right: 1px #000000 solid;
    padding: 5px 10px;

    ${props => props.isSelected &&
        css`
            background-color: coral;
        `
    }

    &:first-child {
        border-top: 1px #000000 solid;
    }

    &:hover {
        background-color: #61dafb;
        cursor: pointer;
    }
`;

function SelectionItem({children, onClickHandler, isSelected}) {
    return (
        <StyledItem isSelected={isSelected} onClick={onClickHandler}>{children}</StyledItem>
    );
}

export default SelectionItem;
