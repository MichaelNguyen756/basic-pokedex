import React from 'react';
import _ from 'lodash';

import Table from 'react-bootstrap/Table';
import MoveRow from './MoveRow';

function MoveList({moveList}) {
    let redBlueMoveList = moveList.filter(moveObj => moveObj.version_group_details.find(v => v.version_group.name === 'red-blue') !== undefined)
        .map(m => ({
            levelAt: m.version_group_details.find(v => v.version_group.name === 'red-blue').level_learned_at,
            moveName: m.move.name
        }));

    return (
        <section className="poke-section">
            <div className="title">Moves</div>
            <div className="move">
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Learns At</th>
                            <th>Move Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_.orderBy(redBlueMoveList, ['levelAt'], ['asc']).map((moveObj, index) => 
                            <MoveRow key={index} levelAt={moveObj.levelAt} moveName={moveObj.moveName}/>
                        )}
                    </tbody>
                </Table>
            </div>
        </section>
    );
}

export default MoveList;