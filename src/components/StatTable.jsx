import React from 'react';

import Table from 'react-bootstrap/Table';

function StatTable({ statList }) {
    return (
        <section className="poke-section">
            <h2 className="title">Stats</h2>
            <div className="stat">
                <Table bordered>
                    <tbody>
                        {statList.map((statObj, index) => (
                            <tr key={index}>
                                <th>{statObj.stat.name}: </th>
                                <td>{statObj.base_stat}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </section>
    );
}

export default StatTable;
