import ChatElement from '../../components/chatElement/chatElement.component';
import ChatModel from '../../models/chat.model';
import style from './chat.module.css';

interface Props {
  chats: ChatModel[] | null;
}

function Chat({ chats }: Props) {
  if (chats) {
    return (
      <div className={style.mainContainer}>
        <div>
          {chats.map((chat) => (
            <ChatElement
              role={chat.role}
              content={chat.content}
              documents={chat.documents}
            />
          ))}
          <div className={style.placeHolder} />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Chat;
