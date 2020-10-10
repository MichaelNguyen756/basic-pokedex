import React, { ReactElement, useEffect } from 'react';

import StyledPanel from './styled/Panel';
import StatSection from './StatTable';
import MoveSection from './MoveSection';
import NameSection from './NameSection';
import EmptySelectionSection from './EmptySelectionSection';
import Sprite from './Sprite';
import AttributeTable from './AttributeTable';
import Loading from './Loading';

import { getMoveList, GetPokemonJSONFromAPI } from '../helpers/api';
import { asyncStatus } from '../helpers/asyncReducer';
import useAsync from '../hooks/useAsync';
import { Pokemon } from '../types/api';

interface PanelProps {
  pokemonURL: string;
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

export default function Panel({ pokemonURL }: PanelProps): ReactElement | null {
  const { data, status, error, run } = useAsync({
    initialState: {
      status: pokemonURL ? asyncStatus.pending : asyncStatus.idle,
    },
  });

  useEffect(() => {
    if (!pokemonURL) {
      return;
    }
    return run(GetPokemonJSONFromAPI(pokemonURL));
  }, [pokemonURL, run]);

  return (
    <StyledPanel title="Panel">
      <PokemonData data={data} />
      <LoadingPanel status={status} />
      <EmptySection status={status} />
      <ErrorPanel error={error} />
    </StyledPanel>
  );
}
