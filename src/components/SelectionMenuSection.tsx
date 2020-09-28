import React, { Dispatch, ReactElement, useEffect } from 'react';
import { UpdateAPIActionTypes } from '../reducers/types';
import { PokemonAPIResource } from '../types/api';

import StyledMenuSection from './styled/SelectionMenuSection';
import Loading from './Loading';
import SelectionItem from './SelectionItem';
import PokemonName from './PokemonName';
import { updateInfo } from '../reducers/actions';
import { GetPokemonJSONFromAPI } from '../helpers/api';
import useIsMountedRef from '../hooks/useIsMountedRef';

export interface SelectionMenuSectionProps {
    selectedIndex: number | null;
    menuItemList: PokemonAPIResource[];
    dispatch: Dispatch<UpdateAPIActionTypes>;
}

function SelectionMenuSection({
    selectedIndex,
    menuItemList: menuList,
    dispatch,
}: SelectionMenuSectionProps): ReactElement {
    const isMountedRef = useIsMountedRef();

    const getPokemonInfo = async (url: string, index: number): Promise<void> => {
        try {
            const resultObj = await GetPokemonJSONFromAPI(url);
            if (isMountedRef.current) {
                dispatch(updateInfo(index, resultObj));
            }
        } catch (error) {
            console.error(`Error fetching Pokemon Info. Error: ${error}`);
        }
    };

    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    }, [isMountedRef]);

    return (
        <StyledMenuSection isLoading={menuList.length === 0}>
            {menuList.length > 0 ? (
                menuList.map(({ url, name }: PokemonAPIResource, index: number) => {
                    return (
                        <SelectionItem
                            isSelected={selectedIndex === index}
                            key={index}
                            onClickHandler={() => getPokemonInfo(url, index)}
                        >
                            <PokemonName name={name} />
                        </SelectionItem>
                    );
                })
            ) : (
                <Loading title="loading menu" />
            )}
        </StyledMenuSection>
    );
}

export default SelectionMenuSection;
