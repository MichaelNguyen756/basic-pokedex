import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import PokemonName, { PokemonNameProps } from '../PokemonName';

export default {
  component: PokemonName,
  title: 'PokemonName',
} as Meta;

const Template: Story<PokemonNameProps> = args => <PokemonName {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'pikachu',
};

export const NidoranMale = Template.bind({});
NidoranMale.args = {
  ...Default.args,
  name: 'nidoran-m',
};

export const NidoranFemale = Template.bind({});
NidoranFemale.args = {
  ...Default.args,
  name: 'nidoran-f',
};

export const MrMime = Template.bind({});
MrMime.args = {
  ...Default.args,
  name: 'mr-mime',
};
