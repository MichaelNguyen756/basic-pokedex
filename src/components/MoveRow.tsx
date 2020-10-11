import React, { ReactElement } from 'react';
import { formatText } from '../helpers';

import { MoveAttribute } from '../types/api';

type MoveRowProps = MoveAttribute;

function MoveRow({ levelAt, moveName }: MoveRowProps): ReactElement {
  return (
    <tr>
      <td>{levelAt}</td>
      <td>{formatText(moveName)}</td>
    </tr>
  );
}

export default MoveRow;
