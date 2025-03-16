import React from 'react';

import PokemonName from '../pokemon-name';

export default function NameSection({ name }: { name: string }) {
  return (
    <header
      className="sticky top-0 w-full bg-amber-800 p-3 text-center text-5xl font-bold text-white"
      title="Pokemon Name"
    >
      <PokemonName name={name} />
    </header>
  );
}
