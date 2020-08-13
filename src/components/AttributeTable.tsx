import React from 'react';
import Table from 'react-bootstrap/Table';

import InfoRow from './InfoRow';

function AttributeTable({ types, abilities }: { types: any; abilities: any }) {
    return (
        <section>
            <Table bordered>
                <tbody>
                    <InfoRow rowTitle="Type" infoList={types} listType="type" />
                    <InfoRow
                        rowTitle="Abilities"
                        infoList={abilities}
                        listType="ability"
                    />
                </tbody>
            </Table>
        </section>
    );
}

export default AttributeTable;
