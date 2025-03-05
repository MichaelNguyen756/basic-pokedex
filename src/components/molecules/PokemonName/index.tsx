import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

import { toUpperFirst } from '../../../helpers';

export type PokemonNameProps = {
  name: string;
};

function isGenderSymbolMale(symbol: string) {
  return symbol === 'm';
}

export default function PokemonName({ name }: PokemonNameProps) {
  if (name.match(/nidoran/i)) {
    const [initialName, genderSymbol] = name.split('-');
    return (
      <>
        {toUpperFirst(initialName)}
        &nbsp;
        <FontAwesomeIcon
          title={`gender icon ${isGenderSymbolMale(genderSymbol) ? 'male' : 'female'}`}
          icon={isGenderSymbolMale(genderSymbol) ? faMars : faVenus}
        />
      </>
    );
  } else if (name.match(/mr/i) && name.match(/mime/i)) {
    return <>Mr. Mime</>;
  } else if (name.match(/farfetchd/i)) {
    return <>Farfetch'd</>;
  } else {
    return <>{toUpperFirst(name)}</>;
  }
}
