import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Loading({ title = 'loading', children = '' }) {
  return (
    <div className="flex h-full items-center justify-center p-[1rem]">
      {children}
      &nbsp;
      <FontAwesomeIcon icon={faSpinner} spin title={title} />
    </div>
  );
}
