import React, { ReactElement, useEffect, useReducer } from 'react';

import Loading from './Loading';
import PokemonName from './PokemonName';
import { PokemonAPIResource } from '../types/api';
import useSafeDispatch from '../hooks/useSafeDispatch';
import { GetPokemonJSONFromAPI } from '../helpers/api';
import StyledMenuSection from './styled/SelectionMenuSection';
import asyncReducer, { asyncStatus } from '../helpers/asyncReducer';
import SelectionItem from './styled/SelectionItem';

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
  const [{ data: menu, status }, unsafeDispatch] = useReducer(asyncReducer, {
    status: asyncStatus.idle,
    data: null,
    error: null,
  });

  const dispatch = useSafeDispatch(unsafeDispatch);

  useEffect(() => {
    const getInitialList = async (): Promise<void> => {
      dispatch({ type: asyncStatus.pending });

      try {
        const { results: data } = await GetPokemonJSONFromAPI();
        dispatch({ type: asyncStatus.resolved, data });
      } catch (error) {
        dispatch({ type: asyncStatus.rejected, error });
      }
    };
    getInitialList();
  }, [dispatch]);
  return (
    <StyledMenuSection isLoading={status === asyncStatus.pending}>
      {status === asyncStatus.resolved &&
        menu.map(({ url, name }: PokemonAPIResource) => (
          <SelectionItem isSelected={pokemonURL === url} key={name} onClick={() => onClick(url)}>
            <PokemonName name={name} />
          </SelectionItem>
        ))}
      <LoadMenu status={status} />
    </StyledMenuSection>
  );
}
