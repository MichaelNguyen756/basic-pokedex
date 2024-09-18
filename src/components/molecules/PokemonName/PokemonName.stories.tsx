import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import PokemonName, { PokemonNameProps } from '.';

export default {
  component: PokemonName,
  title: 'Molecules/Pokemon Name',
} as Meta;

const Template: Story<PokemonNameProps> = args => <PokemonName {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'pikachu',
};

export const NidoranMale = Template.bind({});
NidoranMale.args = {
  name: 'nidoran-m',
};

export const NidoranFemale = Template.bind({});
NidoranFemale.args = {
  name: 'nidoran-f',
};

export const MrMime = Template.bind({});
MrMime.args = {
  name: 'mr-mime',
};
