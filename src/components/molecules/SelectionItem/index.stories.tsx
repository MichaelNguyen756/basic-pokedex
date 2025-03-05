import { Meta, StoryObj } from '@storybook/react';

import SelectionItem from '.';

export default {
  component: SelectionItem,
  title: 'Molecules/Selection Item',
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  args: {},
} as Meta<typeof SelectionItem>;

type Story = StoryObj<typeof SelectionItem>;

export const Default: Story = {
  args: {
    children: 'Default',
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    children: 'Selected',
    isSelected: true,
  },
};
