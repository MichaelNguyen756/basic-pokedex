import type { Meta, StoryObj } from '@storybook/react';

import PokemonName from '.';

export default {
  component: PokemonName,
  title: 'Molecules/Pokemon Name',
} as Meta<typeof PokemonName>;

type Story = StoryObj<typeof PokemonName>;

export const Default: Story = {
  args: {
    name: 'pikachu',
  },
};

export const NidoranMale: Story = {
  args: {
    name: 'nidoran-m',
  },
};

export const NidoranFemale: Story = {
  args: {
    name: 'nidoran-f',
  },
};

export const MrMime: Story = {
  args: {
    name: 'mr-mime',
  },
};
