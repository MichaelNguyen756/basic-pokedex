import React, { ReactElement, useEffect } from 'react';

import Loading from './Loading';
import PokemonName from './PokemonName';
import { PokemonAPIResource } from '../types/api';
import { GetPokemonJSONFromAPI } from '../helpers/api';
import StyledMenuSection from './styled/SelectionMenuSection';
import { asyncStatus } from '../helpers/asyncReducer';
import SelectionItem from './styled/SelectionItem';
import useAsync from '../hooks/useAsync';

export interface SelectionMenuSectionProps {
  pokemonURL: string;
  onClick: (url: string) => void;
}

const LoadMenu = ({ status }: { status: string }) =>
  status === asyncStatus.pending ? <Loading title="loading menu" /> : null;

export default function SelectionMenuSection({
  pokemonURL,
  onClick,
}: SelectionMenuSectionProps): ReactElement {
  const { data: menu, run, status } = useAsync({
    initialState: {
      status: asyncStatus.idle,
      data: null,
      error: null,
    },
  });

  useEffect(() => {
    return run(GetPokemonJSONFromAPI());
  }, [run]);

  return (
    <StyledMenuSection isLoading={status === asyncStatus.pending}>
      {status === asyncStatus.resolved &&
        menu.results.map(({ url, name }: PokemonAPIResource) => (
          <SelectionItem isSelected={pokemonURL === url} key={name} onClick={() => onClick(url)}>
            <PokemonName name={name} />
          </SelectionItem>
        ))}
      <LoadMenu status={status} />
    </StyledMenuSection>
  );
}
