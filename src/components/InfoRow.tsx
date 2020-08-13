import React from 'react';

function getNames(objectList: any, objectType: any) {
    return objectList.map((obj: any) => obj[objectType].name).join(', ');
}

function InfoRow({
    rowTitle,
    infoList,
    listType,
}: {
    rowTitle: string;
    infoList: any;
    listType: any;
}) {
    return (
        <tr>
            <th>{rowTitle}:</th>
            <td>{getNames(infoList, listType)}</td>
        </tr>
    );
}

export default InfoRow;
