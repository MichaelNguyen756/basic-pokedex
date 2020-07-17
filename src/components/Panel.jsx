import React from 'react';
import _ from 'lodash';

import StyledPanel from './styled/Panel';
import StatSection from './StatTable';
import MoveSection from './MoveSection';
import NameSection from './NameSection';
import Sprite from './Sprite';
import AttributeTable from './AttributeTable';

function getMoveList(moves) {
    return moves.filter(({ version_group_details }) =>
        _.includes(
            version_group_details.map(
                ({ move_learn_method }) => move_learn_method.name,
            ),
            'level-up',
        ),
    );
}

function Panel({
    info: {
        abilities,
        types,
        sprites: { front_default },
        stats,
        moves,
    },
    name,
}) {
    return (
        <StyledPanel>
            <NameSection name={name} />
            <Sprite spriteImg={front_default} />
            <AttributeTable types={types} abilities={abilities} />
            <StatSection statList={stats} />
            <MoveSection moveList={getMoveList(moves)} />
        </StyledPanel>
    );
}

export default Panel;
