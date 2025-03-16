import React from 'react';
import { PokemonSprites } from '../../../types/api';

export default function Sprite({ sprites }: { sprites: PokemonSprites }) {
  return (
    <div title="Sprite">
      <img className="m-auto aspect-square w-50" src={sprites.front_default} alt="sprite" />
    </div>
  );
}
