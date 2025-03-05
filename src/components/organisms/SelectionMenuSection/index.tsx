import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import { PokemonAPIResource } from '../../../types/api';

import Loading from '../../atoms/Loading';
import PokemonName from '../../molecules/PokemonName';
import SelectionItem from '../../molecules/SelectionItem';

import { asyncStatus } from '../../constants';
import { getPokemonURL } from '../../../helpers/api';
import useAsync from '../../hooks/useAsync';

export type SelectionMenuSectionProps = {
  pokemonURL: string;
  handleClick: (url: string, name: string) => void;
};

const Container = styled.div<{
  $isLoading: boolean;
}>`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 0 0 auto;
  overflow-y: scroll;

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

const StyledSelectionItem = styled(SelectionItem)`
  display: block;
  width: 100%;
  border-bottom: none;

  ::first-child {
    border-top: none;
  }
`;

const LoadMenu = ({ status }: { status: string }) =>
  status === asyncStatus.pending ? <Loading title="loading menu" /> : null;

export default function SelectionMenuSection({
  pokemonURL,
  handleClick,
}: SelectionMenuSectionProps) {
  const { data: menu, run, status } = useAsync();

  useEffect(() => {
    return run(getPokemonURL());
  }, [run]);

  return (
    <Container $isLoading={status === asyncStatus.pending}>
      {status === asyncStatus.resolved &&
        menu.results.map(({ url, name }: PokemonAPIResource) => (
          <StyledSelectionItem
            isSelected={pokemonURL === url}
            key={name}
            onClick={() => handleClick(url, name)}
          >
            <PokemonName name={name} />
          </StyledSelectionItem>
        ))}
      <LoadMenu status={status} />
    </Container>
  );
}
