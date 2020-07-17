import React from 'react';
import Table from 'react-bootstrap/Table';
import _ from 'lodash';

import MoveRow from './MoveRow';
import { filterByVersionGroup } from '../helpers/filters';

function getMoveList(moveList) {
    return moveList
        .filter(
            ({ version_group_details }) =>
                version_group_details.find(filterByVersionGroup) !== undefined,
        )
        .map(({ version_group_details, move }) => ({
            levelAt: version_group_details.find(filterByVersionGroup)
                .level_learned_at,
            moveName: move.name,
        }));
}

function renderMoveRows(moveList) {
    return _.orderBy(
        getMoveList(moveList),
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
