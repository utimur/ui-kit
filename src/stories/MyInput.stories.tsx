import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyInput from "../MyInput/MyInput";

export default {
    title: 'Example/MyInput',
    component: MyInput,
} as ComponentMeta<typeof MyInput>;

const Template: ComponentStory<typeof MyInput> = (args) => <MyInput {...args} />;

export const SmallInput = Template.bind({});
SmallInput.args = {
    big: false,
    placeholder: 'TEXT',
    label: 'asfasfasf'
};

export const BigInput = Template.bind({});
BigInput.args = {
    big: true,
    placeholder: 'TEXT',
    label: 'asfasfasf'
};

