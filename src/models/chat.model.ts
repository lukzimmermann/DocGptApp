import DocumentModel from './document.model';

interface ChatModel {
  role: 'bot' | 'user';
  content: string;
  documents?: DocumentModel[];
}

export default ChatModel;
