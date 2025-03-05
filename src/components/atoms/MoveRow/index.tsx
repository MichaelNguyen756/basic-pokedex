import React from 'react';
import { formatText } from '../../../helpers';

export default function MoveRow({
  className,
  levelLearntNumber,
  moveName,
}: {
  className?: string;
  levelLearntNumber?: number;
  moveName: string;
}) {
  return (
    <tr className={className}>
      <td className="p-2">{levelLearntNumber}</td>
      <td className="p-2">{formatText(moveName)}</td>
    </tr>
  );
}
