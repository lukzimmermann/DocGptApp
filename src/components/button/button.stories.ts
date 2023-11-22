import { Meta, StoryObj } from '@storybook/react';
import '../../index.css';
import Button from './button.component';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Standard: Story = {
  args: { text: 'Login' },
};
