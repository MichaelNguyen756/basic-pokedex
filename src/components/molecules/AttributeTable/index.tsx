import React, { ReactElement } from 'react';

import InfoRow from '../InfoRow';
import StyledTable from '../Table';

import { getAbilities } from '../../../helpers/api';
import { PokemonType, PokemonAbility } from '../../../types/api';
import TypeGroup from '../TypeGroup';

interface AttributeTableProps {
  types: PokemonType[];
  abilities: PokemonAbility[];
}

function AttributeTable({ types, abilities }: AttributeTableProps): ReactElement {
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
