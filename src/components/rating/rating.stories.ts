import { Meta, StoryObj } from '@storybook/react';
import '../../index.css';
import Rating from './rating.component';

const meta: Meta<typeof Rating> = {
  title: 'Rating',
  component: Rating,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Standard: Story = {
  args: {
    rating: 3,
  },
};
