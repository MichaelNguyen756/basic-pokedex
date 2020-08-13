import styled, { css } from 'styled-components';

import { borderSetting } from './commonValues';

const SelectionItem = styled.li`
    border-right: ${borderSetting};
    border-bottom: ${borderSetting};
    border-left: ${borderSetting};
    list-style: none;
    padding: 5px 10px;

    ${({ isSelected }: { isSelected: boolean }) =>
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
