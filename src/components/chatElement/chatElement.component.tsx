import styles from './chatElement.module.css';
import Document from '../../models/document.model';
import DocumentBadge from '../documentBadge/documentBadge.component';
import { Robot, ThumbsDown, ThumbsUp } from '@phosphor-icons/react';

type Props = {
  role: 'bot' | 'user';
  content: string;
  documents: Document[];
};

function ChatElement({ role, content = 'empty', documents }: Props) {
  const getMainContainerStyle = () => {
    if (role === 'bot')
      return `${styles['main-container']} ${styles['bot-background']}`;
    else return `${styles['main-container']}`;
  };

  const getRightContainerStyle = () => {
    if (role === 'bot') return `${styles['right-container']}`;
    else return `${styles['right-container']} ${styles['bot-visibility']}`;
  };

  const createIcon = () => {
    if (role === 'bot') {
      return (
        <div className={styles['bot-Icon']}>
          <Robot size={35} />
        </div>
      );
    } else {
      return <div className={styles['user-Icon']}>L</div>;
    }
  };

  return (
    <div className={getMainContainerStyle()}>
      <div className={styles['left-container']}>{createIcon()}</div>
      <div className={styles['center-container']}>
        <div>
          <div className={styles['document-container']}>
            {documents.map((doc) => (
              <DocumentBadge
                title={doc.title}
                fileName={doc.fileName}
                pageNumber={doc.page}
                rating={doc.rating}
              />
            ))}
          </div>
          <div className={styles.content}>{content}</div>
        </div>
      </div>
      <div className={getRightContainerStyle()}>
        <ThumbsUp weight="fill" size={30} />
        <ThumbsDown weight="fill" size={30} />
      </div>
    </div>
  );
}

export default ChatElement;
