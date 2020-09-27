import React, { ReactElement } from 'react';

import StyledPanel from './styled/Panel';
import StatSection from './StatTable';
import MoveSection from './MoveSection';
import NameSection from './NameSection';
import Sprite from './Sprite';
import AttributeTable from './AttributeTable';

import { getMoveList } from '../helpers/api';
import { Pokemon } from '../types/api';

interface PanelProps {
    info: Pokemon;
    name: string;
}

function Panel({
    info: { abilities, types, sprites, stats, moves },
    name,
}: PanelProps): ReactElement {
    return (
        <StyledPanel title="Panel">
            <NameSection name={name} />
            <Sprite spriteImg={sprites.front_default} />
            <AttributeTable types={types} abilities={abilities} />
            <StatSection statList={stats} />
            <MoveSection moveList={getMoveList(moves)} />
        </StyledPanel>
    );
}

export default Panel;
