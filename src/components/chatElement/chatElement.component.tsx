import styles from './chatElement.module.css';
import DocumentModel from '../../models/document.model';
import DocumentBadge from '../documentBadge/documentBadge.component';
import { Robot, ThumbsDown, ThumbsUp } from '@phosphor-icons/react';

interface Props {
  role: 'bot' | 'user';
  content: string;
  documents?: DocumentModel[];
}

function ChatElement({ role, content, documents = [] }: Props) {
  const thumbSize = 22;

  const getMainContainerStyle = () => {
    if (role === 'bot')
      return `${styles['main-container']} ${styles['bot-background']}`;
    else return `${styles['main-container']}`;
  };

  const createIcon = () => {
    if (role === 'bot') {
      return (
        <div className={styles['bot-Icon']}>
          <Robot size={35} />
        </div>
      );
    } else {
      return <div className={styles['user-Icon']}>LZ</div>;
    }
  };

  return (
    <div className={getMainContainerStyle()}>
      <div className={styles['left-container']}>{createIcon()}</div>
      <div
        className={
          documents.length > 0
            ? styles['center-container']
            : styles['center-container-flex']
        }
      >
        <div className={styles['content-container']}>
          {documents.length > 0 ? (
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
          ) : (
            <></>
          )}

          <div className={styles.content}>{content}</div>
        </div>
      </div>
      <div className={styles['right-container']}>
        {role === 'bot' ? (
          <div>
            <ThumbsUp
              className={styles.thumbsUp}
              weight="fill"
              size={thumbSize}
            />
            <ThumbsDown
              className={styles.thumbsDown}
              weight="fill"
              size={thumbSize}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ChatElement;
