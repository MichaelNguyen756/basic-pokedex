import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import SelectionItem, { SelectionItemProps } from '../SelectionItem';

export default {
  component: SelectionItem,
  title: 'Selection Menu/SelectionItem',
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<SelectionItemProps> = args => <SelectionItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>Default</>,
  isSelected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  children: <>Selected</>,
  isSelected: true,
};
