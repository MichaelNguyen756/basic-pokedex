import React from 'react';

import Title from './Title';
import MoveTable from './MoveTable';

function MoveSection({ moveList }) {
    return (
        <section>
            <Title />
            <MoveTable moveList={moveList} />
        </section>
    );
}

export default MoveSection;
