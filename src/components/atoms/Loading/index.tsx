import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  padding: 1rem;
`;

export default function Loading({ title = 'loading', text = '' }) {
  return (
    <Container>
      {text}
      &nbsp;
      <FontAwesomeIcon icon={faSpinner} spin title={title} />
    </Container>
  );
}
