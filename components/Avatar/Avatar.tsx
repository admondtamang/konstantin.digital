import { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import AvatarImg from './avatar.jpg';

type AvatarProps = {
  size?: number;
  className?: string;
};

export const Avatar: FC<AvatarProps> = ({ size = 32, className }) => {
  return (
    <Image
      src={AvatarImg}
      alt="Admond Tamang"
      width={size}
      height={size}
      className={clsx(
        'flex-shrink-0 shrink-0 rounded-full bg-black-50 dark:bg-black-950',
        className
      )}
    />
  );
};
