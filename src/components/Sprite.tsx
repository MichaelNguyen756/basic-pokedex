import React from 'react';

import SpriteImage from './styled/SpriteImage';

const imageDimension: string = '105px';

function Sprite({ spriteImg }: { spriteImg: string }) {
    return (
        <div>
            <svg width={imageDimension} height={imageDimension}>
                <SpriteImage href={spriteImg} />
            </svg>
        </div>
    );
}

export default Sprite;
