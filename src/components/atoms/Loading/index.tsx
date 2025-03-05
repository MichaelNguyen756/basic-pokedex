import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Loading({ title = 'loading', text = '' }) {
  return (
    <div className="p-[1rem]">
      {text}
      &nbsp;
      <FontAwesomeIcon icon={faSpinner} spin title={title} />
    </div>
  );
}
