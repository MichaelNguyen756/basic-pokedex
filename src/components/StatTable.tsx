import React, { ReactElement } from 'react';
import Table from 'react-bootstrap/Table';

import Title from './Title';

import { IPokemonStat } from '../types/api';

interface StatSectionProps {
    statList: IPokemonStat[];
}

function StatSection({ statList }: StatSectionProps): ReactElement {
    return (
        <section>
            <Title>Stats</Title>
            <div>
                <Table bordered>
                    <tbody>
                        {statList.map(({ stat, base_stat }: IPokemonStat, index: number) => (
                            <tr key={index}>
                                <th>{stat.name}: </th>
                                <td>{base_stat}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </section>
    );
}

export default StatSection;
