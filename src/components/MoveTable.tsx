import React from 'react';
import Table from 'react-bootstrap/Table';
import _ from 'lodash';

import MoveRow from './MoveRow';

import { filterMoveList } from '../helpers/api';

function renderMoveRows(moveList) {
    return _.orderBy(
        filterMoveList(moveList),
        ['levelAt'],
        ['asc'],
    ).map(({ levelAt, moveName }, index) => (
        <MoveRow key={index} levelAt={levelAt} moveName={moveName} />
    ));
}

function MoveTable({ moveList }) {
    return (
        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Learns At</th>
                        <th>Move Name</th>
                    </tr>
                </thead>
                <tbody>{renderMoveRows(moveList)}</tbody>
            </Table>
        </div>
    );
}

export default MoveTable;
