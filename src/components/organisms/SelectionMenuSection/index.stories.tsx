import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import SelectionMenuSection from '.';

export default {
  component: SelectionMenuSection,
  title: 'Selection Menu/Section',
  args: {
    handleClick: fn(),
    pokemonURL: '',
  },
} as Meta<typeof SelectionMenuSection>;

type Story = StoryObj<typeof SelectionMenuSection>;

export const Default: Story = {};
