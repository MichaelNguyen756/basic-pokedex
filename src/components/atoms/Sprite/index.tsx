import React from 'react';

export default function Sprite({ spriteImg }: { spriteImg: string }) {
  return (
    <div title="Sprite">
      <img className="aspect-square w-[30%] m-auto" src={spriteImg} alt="sprite" />
    </div>
  );
}
