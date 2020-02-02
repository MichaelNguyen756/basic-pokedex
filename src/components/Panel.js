import React from 'react';
import _ from 'lodash';
import styled from 'styled-components'
import Table from 'react-bootstrap/Table';

import StatTable from './StatTable';
import MoveList from './MoveList';
import InfoRow from './InfoRow';
import NameSection from './NameSection';

const StyledPanel = styled.section`
    display: flex;
    flex-flow: column nowrap;
`;

function Panel({info: { abilities, types, sprites, stats, moves }, name}) {
    return (
        <StyledPanel>
            <NameSection name={name} />
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
        </StyledPanel>
    );
}

export default Panel;