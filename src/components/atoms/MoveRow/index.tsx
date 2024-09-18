import React from 'react';
import { formatText } from '../../../helpers';

function MoveRow({
  levelLearntNumber,
  moveName,
}: {
  levelLearntNumber?: number;
  moveName: string;
}) {
  return (
    <tr>
      <td>{levelLearntNumber}</td>
      <td>{formatText(moveName)}</td>
    </tr>
  );
}

export default MoveRow;
