import React from 'react';

import TypeIcon from '../../atoms/TypeIcon';

import { PokemonType } from '../../../types/api';

export default function TypeGroup({ types }: { types: PokemonType[] }) {
  return (
    <div className="flex items-center justify-evenly">
      {types.map(({ type: { name } }) => (
        <TypeIcon key={name} type={name} />
      ))}
    </div>
  );
}
