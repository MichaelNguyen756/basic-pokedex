import React from 'react';
import * as _ from 'lodash';

import Table from 'react-bootstrap/Table';

class MoveList extends React.Component {
    render() {
        let redBlueMoveList = this.props.moveList.filter(moveObj => moveObj.version_group_details.find(v => v.version_group.name === 'red-blue') !== undefined)
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
}

function MoveRow({levelAt, moveName}) {
    return (
        <tr>
            <td>{levelAt}</td>
            <td>{moveName}</td>
        </tr>
    );
}

export default MoveList;