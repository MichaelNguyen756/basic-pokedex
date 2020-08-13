import React from 'react';

function MoveRow({ levelAt, moveName }: { levelAt: any; moveName: any }) {
    return (
        <tr>
            <td>{levelAt}</td>
            <td>{moveName}</td>
        </tr>
    );
}

export default MoveRow;
