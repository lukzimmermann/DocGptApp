import '../../index.css';
import Rating from '../rating/rating.component';
import styles from './documentBadge.module.css';

type Props = {
  title: string;
  fileName: string;
  pageNumber: number;
  rating: number;
};

function DocumentBadge({
  title = 'title',
  fileName = 'fileName',
  pageNumber = 4,
  rating = 2.5,
}: Props) {
  return (
    <div className={styles['main-container']}>
      <div className={styles['first-row']}>
        <div className={styles['title']}>{title}</div>
        <div className={styles.rating}>
          <Rating rating={rating} />
        </div>
      </div>
      <div className={styles['second-row']}>
        <div className={styles['file-name']}>{fileName}</div>
        <div className={styles.page}>{'Page #' + pageNumber}</div>
      </div>
    </div>
  );
}

export default DocumentBadge;
