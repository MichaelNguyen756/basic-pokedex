import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TypeIcon, { TypeIconProps } from '../TypeIcon';

export default {
    component: TypeIcon,
    title: 'TypeIcon',
    decorators: [
        story => <div style={{ padding: '3rem', width: '150px', height: '50px' }}>{story()}</div>,
    ],
} as Meta;

const Template: Story<TypeIconProps> = args => <TypeIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: '',
};

export const Bug = Template.bind({});
Bug.args = {
    ...Default.args,
    type: 'bug',
};

export const Dark = Template.bind({});
Dark.args = {
    ...Default.args,
    type: 'dark',
};

export const Dragon = Template.bind({});
Dragon.args = {
    ...Default.args,
    type: 'dragon',
};

export const Electric = Template.bind({});
Electric.args = {
    ...Default.args,
    type: 'electric',
};

export const Fairy = Template.bind({});
Fairy.args = {
    ...Default.args,
    type: 'fairy',
};

export const Fighting = Template.bind({});
Fighting.args = {
    ...Default.args,
    type: 'fighting',
};

export const Fire = Template.bind({});
Fire.args = {
    ...Default.args,
    type: 'fire',
};

export const Flying = Template.bind({});
Flying.args = {
    ...Default.args,
    type: 'flying',
};

export const Ghost = Template.bind({});
Ghost.args = {
    ...Default.args,
    type: 'ghost',
};

export const Grass = Template.bind({});
Grass.args = {
    ...Default.args,
    type: 'grass',
};

export const Ground = Template.bind({});
Ground.args = {
    ...Default.args,
    type: 'ground',
};

export const Ice = Template.bind({});
Ice.args = {
    ...Default.args,
    type: 'ice',
};

export const Normal = Template.bind({});
Normal.args = {
    ...Default.args,
    type: 'normal',
};

export const Poison = Template.bind({});
Poison.args = {
    ...Default.args,
    type: 'poison',
};

export const Psychic = Template.bind({});
Psychic.args = {
    ...Default.args,
    type: 'psychic',
};

export const Rock = Template.bind({});
Rock.args = {
    ...Default.args,
    type: 'rock',
};

export const Steel = Template.bind({});
Steel.args = {
    ...Default.args,
    type: 'steel',
};

export const Water = Template.bind({});
Water.args = {
    ...Default.args,
    type: 'water',
};
