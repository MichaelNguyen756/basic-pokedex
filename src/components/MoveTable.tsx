import React, { ReactElement } from 'react';
import _ from 'lodash';

import StyledTable from './styled/Table';
import MoveRow from './MoveRow';

import { filterMoveList } from '../helpers/api';
import { PokemonMove, MoveAttribute } from '../types/api';

interface MoveTableProps {
    moveList: PokemonMove[];
}

function renderMoveRows(moveList: PokemonMove[]): ReactElement[] {
    return _.orderBy(
        filterMoveList(moveList),
        ['levelAt'],
        ['asc'],
    ).map(({ levelAt, moveName }: MoveAttribute, index: number) => (
        <MoveRow key={index} levelAt={levelAt} moveName={moveName} />
    ));
}

function MoveTable({ moveList }: MoveTableProps): ReactElement {
    return (
        <div>
            <StyledTable bordered>
                <thead>
                    <tr>
                        <th>Learns At</th>
                        <th>Move Name</th>
                    </tr>
                </thead>
                <tbody>{renderMoveRows(moveList)}</tbody>
            </StyledTable>
        </div>
    );
}

export default MoveTable;
