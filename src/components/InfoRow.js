import React from 'react';

function InfoRow({rowTitle, infoList, listType}) {
    return (
        <tr>
            <th>{rowTitle}:</th>
            <td>{GetNames(infoList, listType)}</td>
        </tr>
    );
}

function GetNames(objectList, objectType){
    return objectList.map(obj => obj[objectType].name).join(", ");
}

export default InfoRow;