import React from 'react';

import Table from 'react-bootstrap/Table';

class StatTable extends React.Component {
    render() {
        return (
            <section className="poke-section">
                <div className="title">Stats</div>
                <div className="stat">
                    <Table bordered>
                        <tbody>
                            {this.props.statList.map((statObj, index) => 
                                <tr key={index}>
                                    <th>{statObj.stat.name}: </th>
                                    <td>{statObj.base_stat}</td>
                                </tr>    
                            )}
                        </tbody>
                    </Table>
                </div>
            </section>
        );
    }
}

export default StatTable;