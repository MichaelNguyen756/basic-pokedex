import React from 'react';

import Title from '../../atoms/title';
import MoveTable from '../move-table';

import { PokemonMove } from '../../../types/api';

export default function MoveSection({ moveList }: { moveList: PokemonMove[] }) {
  return (
    <section title="moves">
      <Title>Moves</Title>
      <MoveTable moveList={moveList} />
    </section>
  );
}
