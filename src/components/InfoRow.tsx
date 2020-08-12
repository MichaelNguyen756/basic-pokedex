import React from 'react';

function getNames(objectList, objectType) {
    return objectList.map(obj => obj[objectType].name).join(', ');
}

function InfoRow({ rowTitle, infoList, listType }) {
    return (
        <tr>
            <th>{rowTitle}:</th>
            <td>{getNames(infoList, listType)}</td>
        </tr>
    );
}

export default InfoRow;