import React from 'react';

import { toUpperFirst } from '../../../helpers';
import { COLOR_VARIANTS } from '../../constants';

export default function TypeIcon({ type }: { type: string }) {
  return (
    <div
      className={`p-[5px] ${COLOR_VARIANTS[type]?.default} flex flex-1 justify-center rounded-3xl font-bold`}
    >
      {toUpperFirst(type)}
    </div>
  );
}
