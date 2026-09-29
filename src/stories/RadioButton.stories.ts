import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { RadioButton } from './RadioButton';

const meta = {
  title: 'Example/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    value: 'option1',
    name: 'example',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Option 1',
    value: 'option1',
    name: 'example',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Option 1',
    value: 'option1',
    name: 'example',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Option 1',
    value: 'option1',
    name: 'example',
    checked: true,
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Option',
    value: 'small-option',
    name: 'example',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Option',
    value: 'large-option',
    name: 'example',
    size: 'large',
    checked: true,
  },
};
