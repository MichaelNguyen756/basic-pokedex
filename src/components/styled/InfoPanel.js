import styled, { css } from 'styled-components';

const InfoPanel = styled.section`
    flex: 1 1 0;
    border: 1px #000000 solid;
    height: 100%;
    overflow-y: scroll;

    ${({ hasSelection }) =>
        !hasSelection &&
        css`
            overflow-y: hidden;
        `}
`;

export default InfoPanel;
