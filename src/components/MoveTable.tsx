import React, { ReactElement } from 'react';
import Table from 'react-bootstrap/Table';
import _ from 'lodash';

import MoveRow from './MoveRow';

import { filterMoveList } from '../helpers/api';
import { IPokemonMove, IMoveAttribute } from '../types/api';

interface MoveTableProps {
    moveList: IPokemonMove[];
}

function renderMoveRows(moveList: IPokemonMove[]): ReactElement[] {
    return _.orderBy(
        filterMoveList(moveList),
        ['levelAt'],
        ['asc'],
    ).map(({ levelAt, moveName }: IMoveAttribute, index: number) => (
        <MoveRow key={index} levelAt={levelAt} moveName={moveName} />
    ));
}

function MoveTable({ moveList }: MoveTableProps): ReactElement {
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
