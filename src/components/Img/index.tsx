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
    isStatic: boolean;
    width?: number;
    height?: number;
  }>;

const Img: React.FC<React.PropsWithChildren<ImgProps>> = ({
  className,
  src = '',
  alt = 'Image Not Found',
  isStatic = false,
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
      width={width}
      height={height}
      {...restProps}
      onError={() => {
        setImgSrc('defaultNoData.png');
      }}
    />
  );
};
export { Img };
