import styled from 'styled-components';

import { borderSetting } from './commonValues';

interface SelectionItemProps {
    isSelected: boolean;
}

const SelectionItem = styled.button<SelectionItemProps>`
    border-style: solid;
    padding: 5px 10px;
    background-color: ${({ isSelected }) => (isSelected ? 'coral' : 'transparent')};

    /**
        This is for testing in isolation
     */
    &::not(:only-child) {
        border-right: ${borderSetting};
        border-bottom: ${borderSetting};
        border-left: ${borderSetting};
    }

    &:last-child::not(:only-child) {
        border-bottom: 0;
    }

    &:hover {
        background-color: #61dafb;
        cursor: pointer;
    }
`;

export default SelectionItem;
