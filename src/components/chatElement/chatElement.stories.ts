import { Meta, StoryObj } from '@storybook/react';
import '../../index.css';
import ChatElement from './chatElement.component';
import Document from '../../models/document.model';

const meta: Meta<typeof ChatElement> = {
  title: 'ChatElement',
  component: ChatElement,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ChatElement>;

const documents: Document[] = [
  {
    title: 'Algorithmen und Datenstrukturen Vorlesung 7',
    fileName: 'ads_v7.pdf',
    page: 27,
    rating: 3.5,
  },
  {
    title: 'Algorithmen und Datenstrukturen Vorlesung 5',
    fileName: 'ads_v5.pdf',
    page: 12,
    rating: 3,
  },
  {
    title: 'Algorithmen und Datenstrukturen Vorlesung 9',
    fileName: 'ads_v9.pdf',
    page: 7,
    rating: 1.5,
  },
];

export const Standard: Story = {
  args: {
    role: 'bot',
    content:
      'Karl Rege is an author or publisher who has written or contributed to several documents on data structures and algorithms. He is affiliated with the School of Engineering at ZHAW. (Quelle: ads_v9.pdf, Seite 8)',
    documents: documents,
  },
};
