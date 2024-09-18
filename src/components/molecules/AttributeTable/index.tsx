import React from 'react';

import InfoRow from '../InfoRow';
import StyledTable from '../Table';

import { getAbilities } from '../../../helpers/api';
import { PokemonType, PokemonAbility } from '../../../types/api';
import TypeGroup from '../TypeGroup';

function AttributeTable({
  types,
  abilities,
}: {
  types: PokemonType[];
  abilities: PokemonAbility[];
}) {
  return (
    <section title="attributes">
      <StyledTable striped bordered>
        <tbody>
          <InfoRow rowTitle="Type">
            <TypeGroup types={types} />
          </InfoRow>
          <InfoRow rowTitle="Abilities">{getAbilities(abilities)}</InfoRow>
        </tbody>
      </StyledTable>
    </section>
  );
}

export default AttributeTable;
