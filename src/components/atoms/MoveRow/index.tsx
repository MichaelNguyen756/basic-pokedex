import React from 'react';
import { formatText } from '../../../helpers';

export default function MoveRow({
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
