import React, { ReactElement } from 'react';

import StyledEmptySelectionSection from './styled';

function EmptySelectionSection(): ReactElement {
  return (
    <StyledEmptySelectionSection>
      <h1>Select a Pokemon from the left-hand list</h1>
    </StyledEmptySelectionSection>
  );
}

export default EmptySelectionSection;
