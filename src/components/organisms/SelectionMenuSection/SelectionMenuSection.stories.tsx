import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SelectionMenuSection, { SelectionMenuSectionProps } from '.';
import * as SelectionItemStories from '../../molecules/SelectionItem/SelectionItem.stories';

export default {
  component: SelectionMenuSection,
  title: 'Selection Menu/Section',
  decorators: [story => <div style={{ padding: '3rem', width: '150px' }}>{story()}</div>],
} as Meta;

const Template: Story<SelectionMenuSectionProps> = args => <SelectionMenuSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...SelectionItemStories.Default.args,
  pokemonURL: '',
  onClick: () => {},
};

// export const WithSpecialPokemon = Template.bind({});
// WithSpecialPokemon.args = {
//   menuItemList: [
//     { name: 'nidoran-m', url: `${PokemonAPIURL}/nidoran-m` },
//     {
//       name: 'nidoran-f',
//       url: `${PokemonAPIURL}/nidoran-f`,
//     },
//     {
//       name: 'mr-mime',
//       url: `${PokemonAPIURL}/mr-mime`,
//     },
//   ],
//   selectedIndex: 0,
// };

// export const EmptySelection = Template.bind({});
// EmptySelection.args = {
//   menuItemList: [],
//   selectedIndex: null,
//   dispatch: () => {},
// };
