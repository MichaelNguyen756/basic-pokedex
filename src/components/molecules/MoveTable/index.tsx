import React from 'react';

import StyledTable from '../Table';
import MoveRow from '../../atoms/MoveRow';

import { filterMoveList } from '../../../helpers/api';
import { PokemonMove, MoveAttribute } from '../../../types/api';

function sortLevelAt(a: MoveAttribute, b: MoveAttribute) {
  if (!a.levelAt) {
    return -1;
  }

  if (!b.levelAt) {
    return 1;
  }

  return a?.levelAt - b?.levelAt;
}

function renderMoveRows(moveList: PokemonMove[]) {
  return filterMoveList(moveList)
    .toSorted(sortLevelAt)
    .map(({ levelAt, moveName }: MoveAttribute, index: number) => (
      <MoveRow key={index} levelLearntNumber={levelAt} moveName={moveName} />
    ));
}

export default function MoveTable({ moveList }: { moveList: PokemonMove[] }) {
  return (
    <div>
      <StyledTable bordered striped>
        <thead>
          <tr>
            <th>Learns At</th>
            <th>Move Name</th>
          </tr>
        </thead>
        <tbody>{renderMoveRows(moveList)}</tbody>
      </StyledTable>
    </div>
  );
}
