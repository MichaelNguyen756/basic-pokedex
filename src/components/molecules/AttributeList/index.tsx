import React from 'react';

import { getAbilities } from '../../../helpers/api';
import type { PokemonType, PokemonAbility } from '../../../types/api';
import TypeGroup from '../TypeGroup';
import InfoRow from '../InfoRow';
import DescriptionList from '../../atoms/DescriptionList';

export default function AttributeList({
  abilities,
  types,
}: {
  abilities: PokemonAbility[];
  types: PokemonType[];
}) {
  return (
    <DescriptionList title="attributes">
      <InfoRow title="Type">
        <TypeGroup types={types} />
      </InfoRow>
      <InfoRow title="Abilities">{getAbilities(abilities)}</InfoRow>
    </DescriptionList>
  );
}
