import React, { ReactElement, useEffect } from 'react';

import Loading from '../../atoms/Loading';
import { PokemonAPIResource } from '../../../types/api';
import PokemonName from '../../molecules/PokemonName';
import SelectionItem from '../../molecules/SelectionItem';
import StyledMenuSection from './SelectionMenuSection';
import { asyncStatus } from '../../constants';
import { getPokemonURL } from '../../../helpers/api';
import useAsync from '../../hooks/useAsync';

export interface SelectionMenuSectionProps {
  pokemonURL: string;
  onClick: (url: string, name: string) => void;
}

const LoadMenu = ({ status }: { status: string }) =>
  status === asyncStatus.pending ? <Loading title="loading menu" /> : null;

export default function SelectionMenuSection({
  pokemonURL,
  onClick,
}: SelectionMenuSectionProps): ReactElement {
  const { data: menu, run, status } = useAsync({
    initialState: {
      status: asyncStatus,
      data: null,
      error: null,
    },
  });

  useEffect(() => {
    return run(getPokemonURL());
  }, [run]);

  return (
    <StyledMenuSection isLoading={status === asyncStatus.pending}>
      {status === asyncStatus.resolved &&
        menu.results.map(({ url, name }: PokemonAPIResource) => (
          <SelectionItem
            isSelected={pokemonURL === url}
            key={name}
            onClick={() => onClick(url, name)}
          >
            <PokemonName name={name} />
          </SelectionItem>
        ))}
      <LoadMenu status={status} />
    </StyledMenuSection>
  );
}
