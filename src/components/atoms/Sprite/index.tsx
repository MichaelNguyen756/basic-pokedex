import React from 'react';
import styled from 'styled-components';

const SpriteImage = styled.img`
  aspect-ratio: 1;
  width: 30%;
`;

function Sprite({ spriteImg }: { spriteImg: string }) {
  return (
    <div title="Sprite">
      <SpriteImage src={spriteImg} alt="sprite" />
    </div>
  );
}

export default Sprite;
