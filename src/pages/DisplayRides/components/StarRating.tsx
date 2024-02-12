import { RatingStarIcon } from '@/Icons';

export const StarRating = ({ rating }: { rating: number | undefined }) => {
  const starsArray = Array.from({ length: Math.floor(rating) });

  return (
    <div className='flex gap-2'>
      {starsArray.map((_, index) => (
        <span key={index}>
          <RatingStarIcon />
        </span>
      ))}
    </div>
  );
};
