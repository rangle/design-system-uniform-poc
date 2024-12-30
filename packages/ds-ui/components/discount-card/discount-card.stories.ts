import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DiscountCard } from './discount-card';

const meta: Meta<typeof DiscountCard> = {
  title: 'Components/DiscountCard',
  component: DiscountCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onApply: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    amount: '$5.00',
    expirationDate: 'Dec 8 2022',
    buttonLabel: 'Apply',
  },
};

export const LargeDiscount: Story = {
  args: {
    amount: '$25.00',
    expirationDate: 'Jan 1 2024',
    buttonLabel: 'Use Now',
  },
}; 