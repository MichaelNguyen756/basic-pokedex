import styled, { css } from 'styled-components';

import SelectionItem from './SelectionItem';

import { borderSetting } from './constants';

interface SelectionMenuSection {
    isLoading: boolean;
}

const SelectionMenuSection = styled.div<SelectionMenuSection>`
    height: 100%;
    flex: 0 0 auto;
    overflow-y: scroll;
    border-top: ${borderSetting};
    border-bottom: ${borderSetting};

    ${({ isLoading }) =>
        isLoading &&
        css`
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
        `}

    /**
    Override default button inline style
     */ 
    ${SelectionItem} {
        display: block;
        width: 100%;
        border-bottom: none;

        ::first-child {
            border-top: none;
        }
    }

    ${SelectionItem} + ${SelectionItem} {
        margin-left: 0;
    }
`;

export default SelectionMenuSection;
