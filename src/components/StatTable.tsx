import React from 'react';
import Table from 'react-bootstrap/Table';

import Title from './Title';

function StatSection({ statList }) {
    return (
        <section>
            <Title>Stats</Title>
            <div>
                <Table bordered>
                    <tbody>
                        {statList.map(({ stat, base_stat }, index) => (
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
