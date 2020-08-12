import React from 'react';
import _ from 'lodash';

import StyledNameSection from './styled/NameSection';

function NameSection({ name }) {
    return <StyledNameSection>{_.upperFirst(name)}</StyledNameSection>;
}

export default NameSection;
