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
        <StyledTable>
          <tbody>
            {statList.map(({ stat, base_stat }: PokemonStat, index) => (
              <tr className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'} key={index}>
                <th className="p-2">{formatText(stat.name)}: </th>
                <td className="p-2">{base_stat}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </div>
    </section>
  );
}
