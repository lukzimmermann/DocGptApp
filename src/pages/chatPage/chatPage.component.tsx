import styles from './chatPage.module.css';

import Input from '../../components/input/input.component';
import Chat from '../../form/chat/chat.component';
import ChatModel from '../../models/chat.model';
import { useEffect, useRef } from 'react';

function ChatPage() {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll the chatContainer to the bottom
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, []);

  const chats: ChatModel[] = [
    {
      role: 'bot',
      content: 'Hi, how can I help you?',
    },
    {
      role: 'user',
      content: 'What is the Eiffeltower and who build it? Why is it in Paris?',
    },
    {
      role: 'bot',
      content:
        "The Eiffel Tower is a famous landmark located in Paris, France. It is an iconic symbol of the city and one of the most recognizable structures in the world. The tower was designed by the French engineer Gustave Eiffel and was completed in 1889. It was constructed as the entrance arch for the 1889 World's Fair, which was held in Paris to celebrate the 100th anniversary of the French Revolution. The Eiffel Tower stands at a height of 324 meters (1,063 feet) and was the tallest man-made structure in the world when it was completed. It is made of iron and consists of three levels that are accessible to the public. Visitors can take elevators or climb stairs to reach the observation decks on the different levels, providing stunning views of Paris. Over the years, the Eiffel Tower has become a symbol of France and is one of the most visited tourist attractions in the world. It is admired for its architectural design, engineering marvel, and its cultural significance.",
    },
    { role: 'user', content: 'Who is Karl Rege?', documents: [] },
    {
      role: 'bot',
      content:
        'Karl Rege is an author or publisher who has written or contributed to several documents on data structures and algorithms. He is affiliated with the School of Engineering at ZHAW. (Quelle: ads_v9.pdf, Seite 8)',
      documents: [
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
      ],
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.chatContainer} ref={chatContainerRef}>
        <Chat chats={chats} />
      </div>
      <div className={styles.gradientBox} />
      <div className={styles.inputContainer}>
        <Input placeholder="Message DocGPT..." buttonIcon="send" />
      </div>
    </div>
  );
}

export default ChatPage;
