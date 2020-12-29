import React, { ReactElement } from 'react';

import Title from '../../atoms/Title';
import MoveTable from '../MoveTable';

import { PokemonMove } from '../../../types/api';

interface MoveSectionProps {
  moveList: PokemonMove[];
}

function MoveSection({ moveList }: MoveSectionProps): ReactElement {
  return (
    <section title="moves">
      <Title>Moves</Title>
      <MoveTable moveList={moveList} />
    </section>
  );
}

export default MoveSection;
