import React, { ReactElement } from 'react';

import InfoRow from './InfoRow';
import StyledTable from './styled/Table';

import { getAbilities } from '../helpers/api';
import { PokemonType, PokemonAbility } from '../types/api';
import TypeIcon from './TypeIcon';
import TypeContainer from './styled/TypeContainer';

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
            <TypeContainer>
              {types.map(({ type: { name } }, index) => (
                <TypeIcon key={index} type={name} />
              ))}
            </TypeContainer>
          </InfoRow>
          <InfoRow rowTitle="Abilities">{getAbilities(abilities)}</InfoRow>
        </tbody>
      </StyledTable>
    </section>
  );
}

export default AttributeTable;
