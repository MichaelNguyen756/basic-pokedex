import styled, { css } from 'styled-components';

interface PanelProps {
  isLoading: boolean;
}

const Panel = styled.section<PanelProps>`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;

  ${({ isLoading }) =>
    isLoading &&
    css`
      align-items: center;
      justify-content: center;
    `}
`;

export default Panel;
