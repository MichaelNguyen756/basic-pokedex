import React, { useEffect, useReducer } from 'react';
import styled, { css } from 'styled-components';

import { asyncStatus } from '../../constants';
import useAsync from '../../hooks/useAsync';
import { Pokemon } from '../../../types/api';
import { getMoveList, getPokemon } from '../../../helpers/api';

import EmptySelectionSection from '../../atoms/EmptySelectionSection';
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

const EmptySection = ({ status }: { status: string }) =>
  status === asyncStatus.idle ? <EmptySelectionSection /> : null;

const LoadingPanel = ({ status }: { status: string }) =>
  status === asyncStatus.pending ? <Loading title="loading menu" text="Fetching info..." /> : null;

const ErrorPanel = ({ error }: { error: Error | null }) =>
  error !== null ? <div>{error.message}</div> : null;

const PokemonData = ({ data }: { data: Pokemon | null }) =>
  data !== null ? (
    <>
      <NameSection name={data.name} />
      <Sprite spriteImg={data.sprites?.front_default} />
      <AttributeTable types={data.types} abilities={data.abilities} />
      <StatSection statList={data.stats} />
      <MoveSection moveList={getMoveList(data.moves)} />
    </>
  ) : null;

function cacheReducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD_POKEMON': {
      return { ...state, [action.name]: action.data };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default function Panel({pokemonURL}: {pokemonURL: string;}) {
  const { data, status, error, run, setState } = useAsync({
    initialState: {
      status: pokemonURL ? asyncStatus.pending : asyncStatus.idle,
    },
  });

  const [cache, dispatch] = useReducer(cacheReducer, {});

  useEffect(() => {
    if (!pokemonURL) {
      return;
    } else if (cache[pokemonURL]) {
      setState(cache[pokemonURL]);
    } else {
      run(
        getPokemon(pokemonURL).then(pokemonData => {
          dispatch({ type: 'ADD_POKEMON', name: pokemonURL, data: pokemonData });
          return pokemonData;
        }),
      );
    }
  }, [cache, dispatch, pokemonURL, run, setState]);

  return (
    <Container title="Panel" $isLoading={status === asyncStatus.pending}>
      <PokemonData data={data} />
      <LoadingPanel status={status} />
      <EmptySection status={status} />
      <ErrorPanel error={error} />
    </Container>
  );
}
