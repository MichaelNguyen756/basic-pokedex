import React, { ReactElement } from 'react';

import { PokemonAPIResource } from '../types/api';
import StyledMenuSection from './styled/SelectionMenuSection';
import SelectionItem from './SelectionItem';
import PokemonName from './PokemonName';
import Loading from './Loading';

export interface SelectionMenuSectionProps {
    menuItemList: PokemonAPIResource[];
    onClickHandler?: (url: string, index: number) => void;
    selectedIndex: number | null;
}

function SelectionMenuSection({
    menuItemList,
    onClickHandler = () => {},
    selectedIndex,
}: SelectionMenuSectionProps): ReactElement {
    return (
        <StyledMenuSection isLoading={menuItemList.length === 0}>
            {menuItemList.length > 0 &&
                menuItemList.map(({ url, name }: PokemonAPIResource, index: number) => (
                    <SelectionItem
                        isSelected={selectedIndex === index}
                        key={index}
                        onClickHandler={() => onClickHandler(url, index)}
                    >
                        <PokemonName name={name} />
                    </SelectionItem>
                ))}
            {menuItemList.length === 0 && <Loading />}
        </StyledMenuSection>
    );
}

export default SelectionMenuSection;
