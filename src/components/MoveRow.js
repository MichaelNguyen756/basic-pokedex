import React from 'react';

function MoveRow({levelAt, moveName}) {
    return (
        <tr>
            <td>{levelAt}</td>
            <td>{moveName}</td>
        </tr>
    );
}

export default MoveRow;