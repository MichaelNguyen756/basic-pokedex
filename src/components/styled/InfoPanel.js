import styled, { css } from 'styled-components';

import { borderSetting } from './commonValues';

const InfoPanel = styled.section`
    flex: 1 1 0;
    border: ${borderSetting};
    height: 100%;
    overflow-y: scroll;

    ${({ hasSelection }) =>
        !hasSelection &&
        css`
            overflow-y: hidden;
        `}
`;

export default InfoPanel;
