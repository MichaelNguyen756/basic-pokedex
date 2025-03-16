import { useQuery } from '@tanstack/react-query';
import React from 'react';

import PokemonName from '../../molecules/PokemonName';
import SelectionItem from '../../molecules/SelectionItem';

import { getPokemonURL } from '../../../helpers/api';

type SelectionMenuSectionProps = {
  handleClick: (url: string, name: string) => void;
  pokemonURL: string;
};

export default function SelectionMenuSection({
  handleClick,
  pokemonURL,
}: SelectionMenuSectionProps) {
  const { status, data } = useQuery({ queryKey: ['pokemon'], queryFn: getPokemonURL });

  return (
    <menu className="flex h-full flex-col overflow-y-scroll">
      {status === 'success' &&
        data.results.map(({ url, name }) => (
          <SelectionItem isSelected={pokemonURL === url} key={name}>
            <button
              className="w-full pt-[5px] pr-[10px] pb-[5px] pl-[10px] hover:cursor-pointer"
              onClick={() => handleClick(url, name)}
            >
              <PokemonName name={name} />
            </button>
          </SelectionItem>
        ))}
    </menu>
  );
}
