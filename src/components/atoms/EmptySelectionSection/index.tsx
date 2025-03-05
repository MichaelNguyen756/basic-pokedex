import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function EmptySelectionSection() {
  return (
    <StyledSection>
      <h1>Select a Pokemon from the left-hand list</h1>
    </StyledSection>
  );
}
