import { useQuery } from '@tanstack/react-query';
import type { QueryStatus } from '@tanstack/react-query';
import React from 'react';
import styled, { css } from 'styled-components';

import { PokemonAPIResource } from '../../../types/api';

import Loading from '../../atoms/Loading';
import PokemonName from '../../molecules/PokemonName';
import SelectionItem from '../../molecules/SelectionItem';

import { getPokemonURL } from '../../../helpers/api';

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

const LoadMenu = ({ status }: { status: QueryStatus }) =>
  status === 'pending' ? <Loading title="loading menu" /> : null;

export default function SelectionMenuSection({
  pokemonURL,
  handleClick,
}: SelectionMenuSectionProps) {
  const { status, data: menu } = useQuery({ queryKey: ['pokemon'], queryFn: getPokemonURL });

  return (
    <Container $isLoading={status === 'pending'}>
      {status === 'success' &&
        menu?.results.map(({ url, name }: PokemonAPIResource) => (
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
