// src/stories/Button.stories.jsx
import React from 'react';
import Button from '../components/Button';            // adjust relative path as needed
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text', 'hover'],
    },
    state: {
      control: 'select',
      options: ['', 'active', 'onclick', 'inverted'],
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
};

const Template = args => <Button {...args}>Continue</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const PrimaryActive = Template.bind({});
PrimaryActive.args = {
  variant: 'primary',
  state: 'active',
};

export const PrimaryOnClick = Template.bind({});
PrimaryOnClick.args = {
  variant: 'primary',
  state: 'onclick',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  variant: 'primary',
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const SecondaryActive = Template.bind({});
SecondaryActive.args = {
  variant: 'secondary',
  state: 'active',
};

export const SecondaryOnClick = Template.bind({});
SecondaryOnClick.args = {
  variant: 'secondary',
  state: 'onclick',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  variant: 'secondary',
  disabled: true,
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
};

export const TextActive = Template.bind({});
TextActive.args = {
  variant: 'text',
  state: 'active',
};

export const TextOnClick = Template.bind({});
TextOnClick.args = {
  variant: 'text',
  state: 'onclick',
};

export const TextDisabled = Template.bind({});
TextDisabled.args = {
  variant: 'text',
  disabled: true,
};

export const HoverActive = Template.bind({});
HoverActive.args = {
  variant: 'hover',
  state: 'active',
};

export const HoverOnClick = Template.bind({});
HoverOnClick.args = {
  variant: 'hover',
  state: 'onclick',
};

export const HoverDisabled = Template.bind({});
HoverDisabled.args = {
  variant: 'hover',
  disabled: true,
};

export const HoverInverted = Template.bind({});
HoverInverted.args = {
  variant: 'hover',
  state: 'inverted',
};
