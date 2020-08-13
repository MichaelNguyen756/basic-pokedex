import React from 'react';

import Title from './Title';
import MoveTable from './MoveTable';

function MoveSection({ moveList }: { moveList: any }) {
    return (
        <section>
            <Title>Moves</Title>
            <MoveTable moveList={moveList} />
        </section>
    );
}

export default MoveSection;
