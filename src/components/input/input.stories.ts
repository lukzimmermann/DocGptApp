import { Meta, StoryObj } from '@storybook/react';
import { string } from 'yup';
import '../../index.css';
import Input from './input.component';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Standard: Story = {
  args: {},
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Benutzername',
  },
};

export const EmailInput: Story = {
  args: {
    type: 'text',
    placeholder: 'hans.muster@suter-industries.ch',
    validator: string()
      .required('Pflichtfeld')
      .email('Muss eine E-Mail Adresse sein'),
  },
};

export const EmailInputIcon: Story = {
  args: {
    placeholder: 'E-Mail',
    icon: 'user',
    buttonIcon: 'send',
    validator: string().required('Required').email('No valid email address'),
  },
};
