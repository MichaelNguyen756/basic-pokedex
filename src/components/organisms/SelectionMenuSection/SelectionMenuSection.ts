import styled, { css } from 'styled-components';

import SelectionItem from '../../molecules/SelectionItem/styled';
import { borderSetting } from '../../constants';

interface SelectionMenuSectionProps {
  isLoading: boolean;
}

const SelectionMenuSection = styled.div<SelectionMenuSectionProps>`
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
