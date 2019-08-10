import React from 'react';
import * as _ from 'lodash';
import Table from 'react-bootstrap/Table';

import StatTable from './StatTable';
import MoveList from './MoveList';

class Panel extends React.Component {
    render() {
        const { abilities, types, sprites, stats, moves } = this.props.info;

        return (
            <section className="poke-panel">
                <div className="name">{_.upperFirst(this.props.name)}</div>
                <div className="image">
                    <svg width="105px" height="105px">
                        <image href={sprites.front_default} width="100%" height="100%"></image>
                    </svg>
                </div>
                <div className="poke-section">
                    <Table bordered>
                        <tbody>
                            <InfoRow rowTitle="Type" infoList={types} listType="type"/>
                            <InfoRow rowTitle="Abilities" infoList={abilities} listType="ability"/>
                        </tbody>
                    </Table>
                </div>
                <StatTable statList={stats}/>
                <MoveList moveList={moves.filter(moveObj => _.includes(moveObj.version_group_details.map(o => o.move_learn_method.name), 'level-up'))}/>
            </section>
        );
    }
}

function GetNames(objectList, objectType){
    return objectList.map(obj => obj[objectType].name).join(", ");
}

function InfoRow({rowTitle, infoList, listType}) {
    return (
        <tr>
            <th>{rowTitle}:</th>
            <td>{GetNames(infoList, listType)}</td>
        </tr>
    );
}

export default Panel;