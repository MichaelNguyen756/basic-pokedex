import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { handlers } from '../../../__mocks__/handlers';
import { POKEMON_API_URL } from '../../../helpers/api';

import SelectionMenuSection from '.';

const meta: Meta<typeof SelectionMenuSection> = {
  component: SelectionMenuSection,
  title: 'Selection Menu/Section',
  argTypes: {
    pokemonURL: {
      control: 'select',
      options: Array.from({ length: 3 }).map(
        (_, index) => `${POKEMON_API_URL}/pokemon/${index + 1}`,
      ),
    },
  },
  args: {
    handleClick: fn(),
    pokemonURL: '',
  },
  parameters: {
    layout: 'centered',
    msw: {
      handlers,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectionMenuSection>;

export const Default: Story = {};

export const SelectedItem: Story = {
  args: {
    pokemonURL: 'https://pokeapi.co/api/v2/pokemon/1',
  },
};
