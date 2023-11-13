import { Meta, StoryObj } from '@storybook/react';
import '../../index.css';
import DocumentBadge from './documentBadge.component';

const meta: Meta<typeof DocumentBadge> = {
  title: 'DocumentBadge',
  component: DocumentBadge,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DocumentBadge>;

export const Standard: Story = {
  args: {
    title: 'Algorithmen und Datenstrukturen',
    fileName: 'ads_v7.pdf',
    pageNumber: 2339,
    rating: 2.5,
  },
};
