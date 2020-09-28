import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SelectionMenuSection, { SelectionMenuSectionProps } from '../SelectionMenuSection';
import * as SelectionItemStories from './SelectionItem.stories';

import { PokemonAPIURL } from '../../helpers/api';

export default {
    component: SelectionMenuSection,
    title: 'Selection Menu/Section',
    decorators: [story => <div style={{ padding: '3rem', width: '150px' }}>{story()}</div>],
} as Meta;

const Template: Story<SelectionMenuSectionProps> = args => <SelectionMenuSection {...args} />;

export const Default = Template.bind({});
Default.args = {
    ...SelectionItemStories.Default.args,
    menuItemList: [
        { name: 'pikachu', url: `${PokemonAPIURL}/pikachu` },
        {
            name: 'bulbasaur',
            url: `${PokemonAPIURL}/bulbasaur`,
        },
        {
            name: 'charmander',
            url: `${PokemonAPIURL}/charmander`,
        },
        {
            name: 'squirtle',
            url: `${PokemonAPIURL}/squirtle`,
        },
        {
            name: 'growlithe',
            url: `${PokemonAPIURL}/growlithe`,
        },
    ],
    selectedIndex: null,
    dispatch: () => {},
};

export const WithSpecialPokemon = Template.bind({});
WithSpecialPokemon.args = {
    menuItemList: [
        { name: 'nidoran-m', url: `${PokemonAPIURL}/nidoran-m` },
        {
            name: 'nidoran-f',
            url: `${PokemonAPIURL}/nidoran-f`,
        },
        {
            name: 'mr-mime',
            url: `${PokemonAPIURL}/mr-mime`,
        },
    ],
    selectedIndex: 0,
};

export const EmptySelection = Template.bind({});
EmptySelection.args = {
    menuItemList: [],
    selectedIndex: null,
    dispatch: () => {},
};
