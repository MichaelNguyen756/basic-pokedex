import React from 'react';

import Title from '../../atoms/title';

import { PokemonStat } from '../../../types/api';
import { formatText } from '../../../helpers';
import InfoRow from '../info-row';
import DescriptionList from '../../atoms/description-list';

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
