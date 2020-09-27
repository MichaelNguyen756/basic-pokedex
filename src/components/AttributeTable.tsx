import React, { ReactElement } from 'react';

import InfoRow from './InfoRow';
import StyledTable from './styled/Table';

import { getTypes, getAbilities } from '../helpers/api';
import { PokemonType, PokemonAbility } from '../types/api';

interface AttributeTableProps {
    types: PokemonType[];
    abilities: PokemonAbility[];
}

function AttributeTable({ types, abilities }: AttributeTableProps): ReactElement {
    return (
        <section title="attributes">
            <StyledTable bordered>
                <tbody>
                    <InfoRow rowTitle="Type">{getTypes(types)}</InfoRow>
                    <InfoRow rowTitle="Abilities">{getAbilities(abilities)}</InfoRow>
                </tbody>
            </StyledTable>
        </section>
    );
}

export default AttributeTable;
