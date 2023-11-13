import { Star, StarHalf } from '@phosphor-icons/react';
import style from './rating.module.css';

type Props = {
  rating: number;
  size?: number;
};

function Rating({ rating = 2, size = 20 }: Props) {
  const maxRating = 4;

  function getStars() {
    const stars = [];

    const fullRating = Math.floor(rating);
    const isFraction = rating % 1 != 0;

    for (let i = 0; i < maxRating; i++) {
      if (fullRating > i) stars.push(<Star weight="fill" size={size} />);
      if (fullRating == i) {
        if (isFraction) stars.push(<StarHalf weight="fill" size={size} />);
        else stars.push(<Star size={size} />);
      }
      if (fullRating < i) stars.push(<Star size={size} />);
    }
    return stars;
  }

  return <div className={style['main-container']}>{getStars()}</div>;
}

export default Rating;
