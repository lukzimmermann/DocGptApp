import ChatElement from '../../components/chatElement/chatElement.component';
import ChatModel from '../../models/chat.model';
import style from './chat.module.css';

interface Props {
  chats: ChatModel[];
}

function Chat({ chats }: Props) {
  return (
    <div>
      {chats.map((chat) => (
        <ChatElement
          role={chat.role}
          content={chat.content}
          documents={chat.documents}
        />
      ))}
    </div>
  );
}

export default Chat;
