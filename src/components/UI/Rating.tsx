type RatingSize = 'sm' | 'md' | 'lg';

interface RatingProps {
  rating: number;
  maxStars?: number;
  reviewCount?: number;
  showCount?: boolean;
  size?: RatingSize;
}

const sizeStyle: Record<RatingSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const Rating = ({
  rating,
  maxStars = 5,
  reviewCount,
  showCount = false,
  size = 'sm',
}: RatingProps) => {
  return (
    <div className={`inline-flex items-center gap-1 ${sizeStyle[size]}`}>
      {Array.from({ length: maxStars }, (_, index) => {
        const filled = index + 1 <= Math.round(rating);
        return (
          <span
            key={index}
            className={filled ? 'text-[#F8B84E]' : 'text-gray-300'}
          >
            ★
          </span>
        );
      })}
      {showCount && reviewCount !== undefined && (
        <span className='text-gray-muted ml-1 text-sm'>({reviewCount})</span>
      )}
    </div>
  );
};

export default Rating;
