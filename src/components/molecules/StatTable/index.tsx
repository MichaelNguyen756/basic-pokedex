import React from 'react';

import StyledTable from '../Table';
import Title from '../../atoms/Title';

import { PokemonStat } from '../../../types/api';
import { formatText } from '../../../helpers';

export default function StatSection({ statList }: { statList: PokemonStat[] }) {
  return (
    <section title="stat">
      <Title>Stats</Title>
      <div>
        <StyledTable striped bordered role="table">
          <tbody>
            {statList.map(({ stat, base_stat }: PokemonStat, index) => (
              <tr key={index}>
                <th>{formatText(stat.name)}: </th>
                <td>{base_stat}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </div>
    </section>
  );
}
