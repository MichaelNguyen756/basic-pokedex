import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import StyledLoading from './styled/Loading';

interface LoadingProps {
  title: string;
  text?: string;
}

function Loading({ title = 'loading', text = '' }: LoadingProps): ReactElement {
  return (
    <StyledLoading>
      {text}
      <FontAwesomeIcon icon={faSpinner} spin title={title} />
    </StyledLoading>
  );
}

export default Loading;
