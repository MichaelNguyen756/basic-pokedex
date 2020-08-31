import styled, { css } from 'styled-components';

import { borderSetting } from './commonValues';

interface SelectionItemProps {
    isSelected: boolean;
}

const SelectionItem = styled.li<SelectionItemProps>`
    border-right: ${borderSetting};
    border-bottom: ${borderSetting};
    border-left: ${borderSetting};
    list-style: none;
    padding: 5px 10px;

    ${({ isSelected }) =>
        isSelected &&
        css`
            background-color: coral;
        `}

    &:last-child {
        border-bottom: 0;
    }

    &:hover {
        background-color: #61dafb;
        cursor: pointer;
    }
`;

export default SelectionItem;
