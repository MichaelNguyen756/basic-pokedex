import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const StyledNameSection = styled.div`
    flex: 0 0 auto;
    height: 5vh;
    font-size: 2em;
    font-weight: bold;
    color: #ffffff;
    background-color: brown;
`;

function NameSection({name}) {
    return <StyledNameSection>{_.upperFirst(name)}</StyledNameSection>;
}

export default NameSection;
