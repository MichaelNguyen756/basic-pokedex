import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import SelectionItem from '.';

const meta: Meta<typeof SelectionItem> = {
  component: SelectionItem,
  title: 'Molecules/Selection Item',
  args: {
    children: 'Default',
    isSelected: false,
  },
  decorators: [
    Story => (
      <menu>
        <Story />
      </menu>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SelectionItem>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    children: 'Selected',
    isSelected: true,
  },
};
