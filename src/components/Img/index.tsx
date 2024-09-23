'use client';

import Image from 'next/image';
import React from 'react';

const BASE_URL = process.env.BASE_PATH || '/images/';

type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  Partial<{
    className: string;
    src: string;
    alt: string;
    priority?: boolean;
    isStatic: boolean;
    width?: number;
    height?: number;
  }>;

const Img: React.FC<React.PropsWithChildren<ImgProps>> = ({
  className,
  src = 'https://via.placeholder.com/150',
  alt = 'Image Not Found',
  isStatic = false,
  priority = false,
  width,
  height,
  ...restProps
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  React.useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      className={className}
      src={isStatic ? imgSrc : BASE_URL + imgSrc}
      alt={alt}
      priority={priority}
      width={width}
      height={height}
      {...restProps}
      onError={() => {
        setImgSrc('https://via.placeholder.com/150');
      }}
    />
  );
};
export { Img };
