import { FetchStatus, QueryStatus, useQuery } from '@tanstack/react-query';
import React from 'react';
import styled, { css } from 'styled-components';

import { Pokemon } from '../../../types/api';
import { getMoveList, getPokemon } from '../../../helpers/api';

import Loading from '../../atoms/Loading';
import Sprite from '../../atoms/Sprite';

import AttributeTable from '../../molecules/AttributeTable';
import MoveSection from '../../molecules/MoveSection';
import NameSection from '../../molecules/NameSection';
import StatSection from '../../molecules/StatTable';

const Container = styled.section<{
  $isLoading: boolean;
}>`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      align-items: center;
      justify-content: center;
    `}
`;

const LoadingPanel = ({ status }: { status: QueryStatus }) =>
  status === 'pending' ? <Loading title="loading menu" text="Fetching info..." /> : null;

const ErrorPanel = ({ error }: { error: Error | null }) =>
  error !== null ? <div>{error.message}</div> : null;

const PokemonData = ({ data }: { data: Pokemon | undefined }) =>
  !!data ? (
    <>
      <NameSection name={data.name} />
      <Sprite spriteImg={data.sprites?.front_default} />
      <AttributeTable types={data.types} abilities={data.abilities} />
      <StatSection statList={data.stats} />
      <MoveSection moveList={getMoveList(data.moves)} />
    </>
  ) : null;

export default function Panel({ pokemonURL }: { pokemonURL: string }) {
  const { status, data, error } = useQuery({
    queryKey: [pokemonURL],
    queryFn: () => getPokemon(pokemonURL),
  });

  return (
    <Container title="Panel" $isLoading={status === 'pending'}>
      <PokemonData data={data} />
      <LoadingPanel status={status} />
      <ErrorPanel error={error} />
    </Container>
  );
}
