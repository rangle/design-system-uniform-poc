import type { Meta, StoryObj } from '@storybook/react';
import { CheckCircleIcon } from './check-circle-icon';

const meta: Meta<typeof CheckCircleIcon> = {
  title: 'Icons/CheckCircleIcon',
  component: CheckCircleIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomSize: Story = {
  args: {
    size: 48,
  },
};

export const CustomColor: Story = {
  args: {
    color: '#00ff00',
  },
};

export const WithClassName: Story = {
  args: {
    className: 'custom-class',
  },
}; 