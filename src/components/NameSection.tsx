import React from 'react';
import _ from 'lodash';

import StyledNameSection from './styled/NameSection';

function NameSection({ name }: { name: string }) {
    return <StyledNameSection>{_.upperFirst(name)}</StyledNameSection>;
}

export default NameSection;
