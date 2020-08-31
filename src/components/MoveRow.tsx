import React, { ReactElement } from 'react';

import { IMoveAttribute } from '../types/api';

type MoveRowProps = IMoveAttribute;

function MoveRow({ levelAt, moveName }: MoveRowProps): ReactElement {
    return (
        <tr>
            <td>{levelAt}</td>
            <td>{moveName}</td>
        </tr>
    );
}

export default MoveRow;
