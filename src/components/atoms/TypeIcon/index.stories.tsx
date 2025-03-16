import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { POKEMON_TYPES } from '../../constants';

import TypeIcon from '.';

const meta: Meta<typeof TypeIcon> = {
  component: TypeIcon,
  title: 'Atoms/Type Icon',
  argTypes: {
    type: {
      control: 'radio',
      options: Object.values(POKEMON_TYPES),
    },
  },
  args: {
    type: POKEMON_TYPES.BUG,
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div className="w-[200px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TypeIcon>;

export const Bug: Story = {
  args: {
    type: POKEMON_TYPES.BUG,
  },
};

export const Dark: Story = {
  args: {
    type: POKEMON_TYPES.DARK,
  },
};

export const Dragon: Story = {
  args: {
    type: POKEMON_TYPES.DRAGON,
  },
};

export const Electric: Story = {
  args: {
    type: POKEMON_TYPES.ELECTRIC,
  },
};

export const Fairy: Story = {
  args: {
    type: POKEMON_TYPES.FAIRY,
  },
};

export const Fighting: Story = {
  args: {
    type: POKEMON_TYPES.FIGHTING,
  },
};

export const Fire: Story = {
  args: {
    type: POKEMON_TYPES.FIRE,
  },
};

export const Flying: Story = {
  args: {
    type: POKEMON_TYPES.FLYING,
  },
};

export const Normal: Story = {
  args: {
    type: 'normal',
  },
};
