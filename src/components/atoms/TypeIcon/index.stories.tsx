import { Meta, Story } from '@storybook/react/types-6-0';
import TypeIcon, { TypeIconProps } from '.';

import React from 'react';

export default {
  component: TypeIcon,
  title: 'Atoms/Type Icon',
  decorators: [
    story => (
      <div
        style={{
          padding: '3rem',
          width: '150px',
          height: '50px',
        }}
      >
        {story()}
      </div>
    ),
  ],
} as Meta;

const Template: Story<TypeIconProps> = args => <TypeIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: '',
};

export const Bug = Template.bind({});
Bug.args = {
  type: 'bug',
};

export const Dark = Template.bind({});
Dark.args = {
  type: 'dark',
};

export const Dragon = Template.bind({});
Dragon.args = {
  type: 'dragon',
};

export const Electric = Template.bind({});
Electric.args = {
  type: 'electric',
};

export const Fairy = Template.bind({});
Fairy.args = {
  type: 'fairy',
};

export const Fighting = Template.bind({});
Fighting.args = {
  type: 'fighting',
};

export const Fire = Template.bind({});
Fire.args = {
  type: 'fire',
};

export const Flying = Template.bind({});
Flying.args = {
  type: 'flying',
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost',
};

export const Grass = Template.bind({});
Grass.args = {
  type: 'grass',
};

export const Ground = Template.bind({});
Ground.args = {
  type: 'ground',
};

export const Ice = Template.bind({});
Ice.args = {
  type: 'ice',
};

export const Normal = Template.bind({});
Normal.args = {
  type: 'normal',
};

export const Poison = Template.bind({});
Poison.args = {
  type: 'poison',
};

export const Psychic = Template.bind({});
Psychic.args = {
  type: 'psychic',
};

export const Rock = Template.bind({});
Rock.args = {
  type: 'rock',
};

export const Steel = Template.bind({});
Steel.args = {
  type: 'steel',
};

export const Water = Template.bind({});
Water.args = {
  type: 'water',
};
