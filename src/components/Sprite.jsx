import React from 'react';

import SpriteImage from './styled/SpriteImage';

const imageDimension = '105px';

function Sprite({ spriteImg }) {
    return (
        <div>
            <svg width={imageDimension} height={imageDimension}>
                <SpriteImage href={spriteImg} />
            </svg>
        </div>
    );
}

export default Sprite;
