import styled, { css } from 'styled-components';

import { borderSetting } from './commonValues';

const SelectionItem = styled.li`
    border-bottom: ${borderSetting};
    list-style: none;
    border-left: ${borderSetting};
    border-right: ${borderSetting};
    padding: 5px 10px;

    ${({ isSelected }) =>
        isSelected &&
        css`
            background-color: coral;
        `}

    &:first-child {
        border-top: ${borderSetting};
    }

    &:hover {
        background-color: #61dafb;
        cursor: pointer;
    }
`;

export default SelectionItem;
