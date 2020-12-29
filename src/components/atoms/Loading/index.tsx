import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import StyledLoading from './styled';
import { LoadingProps } from './types';

function Loading({ title = 'loading', text = '' }: LoadingProps): ReactElement {
  return (
    <StyledLoading>
      {text}
      &nbsp;
      <FontAwesomeIcon icon={faSpinner} spin title={title} />
    </StyledLoading>
  );
}

export default Loading;
