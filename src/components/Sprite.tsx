import React, { ReactElement } from 'react';

import SpriteImage from './styled/SpriteImage';

const imageDimension: string = '105';

interface SpriteProps {
    spriteImg: string;
}

function Sprite({ spriteImg }: SpriteProps): ReactElement {
    return (
        <div title="Sprite">
            <SpriteImage
                src={spriteImg}
                alt="sprite"
                width={imageDimension}
                height={imageDimension}
            />
        </div>
    );
}

export default Sprite;
