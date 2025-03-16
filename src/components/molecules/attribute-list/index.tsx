import React from 'react';

import { getAbilities } from '../../../helpers/api';
import type { PokemonType, PokemonAbility } from '../../../types/api';
import TypeGroup from '../type-group';
import InfoRow from '../info-row';
import DescriptionList from '../../atoms/description-list';

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
