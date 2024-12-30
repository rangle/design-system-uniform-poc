import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CheckCircleIcon } from '../icons/check-circle-icon';

import { ProductCard } from './product-card';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onBuy: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Incredible Product',
    pricePerMonth: '$39.99/mo',
    features: [
      {
        icon: <CheckCircleIcon />,
        description: 'Advanced analytics and reporting',
      },
      {
        icon: <CheckCircleIcon />,
        description: 'Unlimited cloud storage',
      },
      {
        icon: <CheckCircleIcon />,
        description: '24/7 customer support',
      },
    ],
    buttonLabel: 'Buy Now',
    footerText: 'For clients in Canada only',
    badgeText: 'Popular',
  },
};

export const NoFooterText: Story = {
  args: {
    ...Default.args,
    footerText: undefined,
  },
};

export const NoBadge: Story = {
  args: {
    ...Default.args,
    badgeText: undefined,
  },
};

export const CustomButton: Story = {
  args: {
    ...Default.args,
    buttonLabel: 'Get Started',
  },
}; 