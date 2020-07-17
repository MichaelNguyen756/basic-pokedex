import React from 'react';

import Table from 'react-bootstrap/Table';

function StatSection({ statList }) {
    return (
        <section>
            <h2>Stats</h2>
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
