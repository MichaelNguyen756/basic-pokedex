import React from 'react';

import Title from '../../atoms/Title';

import { PokemonStat } from '../../../types/api';
import { formatText } from '../../../helpers';
import InfoRow from '../InfoRow';
import DescriptionList from '../../atoms/DescriptionList';

export default function StatSection({ statList }: { statList: PokemonStat[] }) {
  return (
    <section title="stat">
      <Title>Stats</Title>
      <DescriptionList>
        {statList.map(({ stat: { name }, base_stat }: PokemonStat) => (
          <InfoRow key={name} title={formatText(name)}>
            {base_stat}
          </InfoRow>
        ))}
      </DescriptionList>
    </section>
  );
}
