import React, { ReactElement } from 'react';
import { PokemonSprites } from '../types/api';

import SpriteImage from './styled/SpriteImage';

const imageDimension: string = '105';

interface SpriteProps {
  spriteImg: PokemonSprites;
}

function Sprite({ spriteImg }: SpriteProps): ReactElement {
  return (
    <div title="Sprite">
      <SpriteImage
        src={spriteImg.front_default}
        alt="sprite"
        width={imageDimension}
        height={imageDimension}
      />
    </div>
  );
}

export default Sprite;
