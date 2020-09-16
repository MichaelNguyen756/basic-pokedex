import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import StyledLoading from './styled/Loading';

function Loading(): ReactElement {
    return (
        <StyledLoading>
            <FontAwesomeIcon icon={faSpinner} spin />
        </StyledLoading>
    );
}

export default Loading;
