import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';

import { Pokemon } from '../../../types/api';
import { getMoveList, getPokemon } from '../../../helpers/api';

import Sprite from '../../atoms/sprite';

import AttributeList from '../../molecules/attribute-list';
import MoveSection from '../../molecules/move-section';
import NameSection from '../../molecules/name-section';
import StatSection from '../../molecules/stat-section';

const ErrorPanel = ({ error }: { error: Error | null }) =>
  error != null ? <div>{error.message}</div> : null;

const PokemonData = ({ data }: { data: Pokemon | undefined }) =>
  !!data ? (
    <>
      <NameSection name={data.name} />
      <article className="w-[80%]">
        <Sprite sprites={data.sprites} />
        <AttributeList types={data.types} abilities={data.abilities} />
        <StatSection statList={data.stats} />
        <MoveSection moveList={getMoveList(data.moves)} />
      </article>
    </>
  ) : null;

export default function Panel({ pokemonURL }: { pokemonURL: string }) {
  const { data, error } = useSuspenseQuery({
    queryKey: [pokemonURL],
    queryFn: () => getPokemon(pokemonURL),
  });

  return (
    <section className="flex w-full flex-col flex-nowrap items-center" title="Panel">
      <PokemonData data={data} />
      <ErrorPanel error={error} />
    </section>
  );
}
