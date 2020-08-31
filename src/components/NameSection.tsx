import React, { ReactElement } from 'react';
import _ from 'lodash';

import StyledNameSection from './styled/NameSection';

interface NameSectionProps {
    name: string;
}

function NameSection({ name }: NameSectionProps): ReactElement {
    return <StyledNameSection>{_.upperFirst(name)}</StyledNameSection>;
}

export default NameSection;
