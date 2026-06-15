import { useState } from 'react';

type AvatarSize = 'sm' | 'md' | 'lg';
interface AvatarProps {
  src?: string;
  alt: string;
  size?: AvatarSize;
  initials?: string;
  className?: string;
}

const sizeStyles: Record<AvatarSize, string> = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-md',
  lg: 'w-16 h-16 text-base',
};
const baseStyles =
  'rounded-full overflow-hidden shrink-0 inline-flex items-center justify-center font-semibold bg-neon text-white select-none';

const Avatar = ({
  src,
  alt,
  size = 'sm',
  initials = '?',
  className = '',
}: AvatarProps) => {
  const [imgError, setImgError] = useState(false);

  const showImg = src && !imgError;

  return (
    <div className={`${baseStyles} ${sizeStyles[size]} ${className}`}>
      {showImg ? (
        <img
          src={src}
          alt={alt}
          className='w-full h-full object-cover'
          onError={() => setImgError(true)}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
