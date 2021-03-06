import React, { ReactElement } from 'react';

import StyledTable from '../Table';
import Title from '../../atoms/Title';

import { PokemonStat } from '../../../types/api';
import { formatText } from '../../../helpers';

interface StatSectionProps {
  statList: PokemonStat[];
}

function StatSection({ statList }: StatSectionProps): ReactElement {
  return (
    <section title="stat">
      <Title>Stats</Title>
      <div>
        <StyledTable striped bordered role="table">
          <tbody>
            {statList.map(({ stat, base_stat }: PokemonStat, index: number) => (
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

export default StatSection;
