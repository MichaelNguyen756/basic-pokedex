import React, { ReactElement, useEffect, useReducer } from 'react';
import { getMoveList, getPokemon } from '../../../helpers/api';

import AttributeTable from '../../molecules/AttributeTable';
import EmptySelectionSection from '../../atoms/EmptySelectionSection';
import Loading from '../../atoms/Loading';
import MoveSection from '../../molecules/MoveSection';
import NameSection from '../../molecules/NameSection';
import { Pokemon } from '../../../types/api';
import Sprite from '../../atoms/Sprite';
import StatSection from '../../molecules/StatTable';
import StyledPanel from './styled';
import { asyncStatus } from '../../constants';
import useAsync from '../../hooks/useAsync';

interface PanelProps {
  pokemonURL: string;
  pokemonName: string;
}

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
      <Sprite spriteImg={data.sprites} />
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

export default function Panel({ pokemonURL, pokemonName }: PanelProps): ReactElement | null {
  const { data, status, error, run, setState } = useAsync({
    initialState: {
      status: pokemonURL ? asyncStatus.pending : asyncStatus.idle,
    },
  });

  const [cache, dispatch] = useReducer(cacheReducer, {});

  useEffect(() => {
    if (!pokemonURL) {
      return;
    } else if (cache[pokemonName]) {
      setState(cache[pokemonName]);
    } else {
      run(
        getPokemon(pokemonURL).then(pokemonData => {
          dispatch({ type: 'ADD_POKEMON', name: pokemonName, data: pokemonData });
          return pokemonData;
        }),
      );
    }
  }, [cache, pokemonName, dispatch, pokemonURL, run, setState]);
  return (
    <StyledPanel title="Panel" isLoading={status === asyncStatus.pending}>
      <PokemonData data={data} />
      <LoadingPanel status={status} />
      <EmptySection status={status} />
      <ErrorPanel error={error} />
    </StyledPanel>
  );
}
