import React, { ReactElement } from 'react';

import Title from './Title';
import MoveTable from './MoveTable';

import { IPokemonMove } from '../types/api';

interface MoveSectionProps {
    moveList: IPokemonMove[];
}

function MoveSection({ moveList }: MoveSectionProps): ReactElement {
    return (
        <section>
            <Title>Moves</Title>
            <MoveTable moveList={moveList} />
        </section>
    );
}

export default MoveSection;
