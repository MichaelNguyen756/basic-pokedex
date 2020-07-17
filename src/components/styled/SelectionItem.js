import styled, { css } from 'styled-components';

const SelectionItem = styled.li`
    border-bottom: 1px #000000 solid;
    list-style: none;
    border-left: 1px #000000 solid;
    border-right: 1px #000000 solid;
    padding: 5px 10px;

    ${({ isSelected }) =>
        isSelected &&
        css`
            background-color: coral;
        `}

    &:first-child {
        border-top: 1px #000000 solid;
    }

    &:hover {
        background-color: #61dafb;
        cursor: pointer;
    }
`;

export default SelectionItem;
