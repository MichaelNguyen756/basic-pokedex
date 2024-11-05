import styled from 'styled-components';

import { borderSetting } from '../../constants';

const InfoPanel = styled.section<{
  $hasSelection: boolean;
}>`
  flex: 1 1 0;
  height: 100%;
  border: ${borderSetting};
  overflow-y: ${({ $hasSelection }) => ($hasSelection ? 'scroll' : 'hidden')};
`;

export default InfoPanel;
