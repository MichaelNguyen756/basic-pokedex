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
      <MoveRow
        className={index % 2 === 1 ? 'bg-gray-200' : 'bg-white'}
        key={index}
        levelLearntNumber={levelAt}
        moveName={moveName}
      />
    ));
}

export default function MoveTable({ moveList }: { moveList: PokemonMove[] }) {
  return (
    <div>
      <StyledTable>
        <thead>
          <tr className="bg-gray-200 border-b-2">
            <th className="p-2">Learns At</th>
            <th>Move Name</th>
          </tr>
        </thead>
        <tbody>{renderMoveRows(moveList)}</tbody>
      </StyledTable>
    </div>
  );
}
