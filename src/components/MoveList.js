import React from 'react';
import _ from 'lodash';

import Table from 'react-bootstrap/Table';
import Title from './Title';
import MoveRow from './MoveRow';

function MoveList({moveList}) {
    return (
        <section className="poke-section">
            <Title/>
            <div className="move">
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Learns At</th>
                            <th>Move Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_.orderBy(getMoveList(moveList), ['levelAt'], ['asc']).map((moveObj, index) => 
                            <MoveRow key={index} levelAt={moveObj.levelAt} moveName={moveObj.moveName}/>
                        )}
                    </tbody>
                </Table>
            </div>
        </section>
    );
}

function getMoveList(moveList) {
    return moveList.filter(moveObj => moveObj.version_group_details.find(v => v.version_group.name === 'red-blue') !== undefined)
    .map(m => ({
        levelAt: m.version_group_details.find(v => v.version_group.name === 'red-blue').level_learned_at,
        moveName: m.move.name
    }));
}

export default MoveList;