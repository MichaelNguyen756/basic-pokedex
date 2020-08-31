import React, { ReactElement } from 'react';

import SpriteImage from './styled/SpriteImage';

const imageDimension: string = '105px';

interface SpriteProps {
    spriteImg: string;
}

function Sprite({ spriteImg }: SpriteProps): ReactElement {
    return (
        <div>
            <svg width={imageDimension} height={imageDimension}>
                <SpriteImage href={spriteImg} />
            </svg>
        </div>
    );
}

export default Sprite;
