import React from 'react';
import orderBy from 'lodash/orderBy';

import StyledTable from '../Table';
import MoveRow from '../../atoms/MoveRow';

import { filterMoveList } from '../../../helpers/api';
import { PokemonMove, MoveAttribute } from '../../../types/api';

function renderMoveRows(moveList: PokemonMove[]) {
  return orderBy(filterMoveList(moveList), ['levelAt'], ['asc']).map(
    ({ levelAt, moveName }: MoveAttribute, index: number) => (
      <MoveRow key={index} levelLearntNumber={levelAt} moveName={moveName} />
    ),
  );
}

function MoveTable({ moveList }: { moveList: PokemonMove[] }) {
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

export default MoveTable;
