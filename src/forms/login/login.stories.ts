import { Meta, StoryObj } from '@storybook/react';
import '../../index.css';
import Login from './login.component';

const meta: Meta<typeof Login> = {
  title: 'Login',
  component: Login,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Login>;

export const Standard: Story = {
  args: {
    rating: 3,
  },
};
