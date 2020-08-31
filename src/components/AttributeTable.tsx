import React, { ReactElement } from 'react';
import Table from 'react-bootstrap/Table';

import InfoRow from './InfoRow';

import { getTypes, getAbilities } from '../helpers/api';
import { IPokemonType, IPokemonAbility } from '../types/api';

interface AttributeTableProps {
    types: IPokemonType[];
    abilities: IPokemonAbility[];
}

function AttributeTable({ types, abilities }: AttributeTableProps): ReactElement {
    return (
        <section>
            <Table bordered>
                <tbody>
                    <InfoRow rowTitle="Type">{getTypes(types)}</InfoRow>
                    <InfoRow rowTitle="Abilities">{getAbilities(abilities)}</InfoRow>
                </tbody>
            </Table>
        </section>
    );
}

export default AttributeTable;
