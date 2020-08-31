import styled from 'styled-components';

import { borderSetting } from './commonValues';

interface InfoPanelProps {
    hasSelection: boolean;
}

const InfoPanel = styled.section<InfoPanelProps>`
    flex: 1 1 0;
    height: 100%;
    border: ${borderSetting};
    overflow-y: ${({ hasSelection }) => (hasSelection ? 'scroll' : 'hidden')};
`;

export default InfoPanel;
