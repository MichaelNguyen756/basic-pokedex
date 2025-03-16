import React from 'react';

import { filterMoveList } from '../../../helpers/api';
import { PokemonMove, MoveAttribute } from '../../../types/api';
import { formatText } from '../../../helpers';

export default function MoveTable({ moveList }: { moveList: PokemonMove[] }) {
  return (
    <div>
      <table className="w-full table-fixed border border-gray-400 text-center">
        <thead>
          <tr className="border-b-2 bg-gray-200">
            <th className="p-2">Learns At</th>
            <th>Move Name</th>
          </tr>
        </thead>
        <tbody>
          {filterMoveList(moveList).map(({ levelAt, moveName }: MoveAttribute, index: number) => (
            <tr key={moveName} className={index % 2 === 1 ? 'bg-gray-200' : 'bg-white'}>
              <td className="p-2">{levelAt}</td>
              <td className="p-2">{formatText(moveName)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
