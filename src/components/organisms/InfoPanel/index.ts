import styled from 'styled-components';

import { BORDER_SETTING } from '../../constants';

const InfoPanel = styled.section<{
  $hasSelection: boolean;
}>`
  flex: 1 1 0;
  height: 100%;
  border: ${BORDER_SETTING};
  overflow-y: ${({ $hasSelection }) => ($hasSelection ? 'scroll' : 'hidden')};
`;

export default InfoPanel;
