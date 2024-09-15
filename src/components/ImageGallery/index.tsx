'use client';

import { Img } from '@/components';
interface ImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className: string;
}

interface GridProps {
  gap: string;
  images: ImageProps[];
}
interface Props {
  className?: string;
  grids: GridProps[];
}

export const ImageGallery = ({ className, grids }: Props) => {
  return (
    <div
      className={`${className} flex sm:flex-col phone-md:justify-center phone-md:items-center phone-md:flex-wrap items-center gap-[26px] flex-1`}
    >
      {grids.map((grid, i) => (
        <div
          className={`flex w-full flex-col phone-md:justify-center phone-md:items-center ${grid.gap}`}
          key={i}
        >
          {grid.images.map((img, i_img) => (
            <Img
              data-aos='fade-up'
              key={i_img}
              src={img.src}
              width={img.width || 388}
              height={img.height || 400}
              alt={img.alt}
              className={`${img.className} `}
            />
          ))}
        </div>
      ))}

      {/* <div className='flex w-full flex-col gap-[26px]'>
        <Img
          src='img_image_14.png'
          width={388}
          height={388}
          alt='Imagefourteen'
          className='h-[388px] rounded-[24px] object-cover'
        />
        <Img
          src='img_image_17.png'
          width={388}
          height={388}
          alt='Imageseventeen'
          className='h-[388px] rounded-[24px] object-cover'
        />
      </div>
      <div className='flex w-full flex-col gap-7'>
        <Img
          src='img_image_9.png'
          width={388}
          height={522}
          alt='Imagenine'
          className='h-[522px] rounded-[24px] object-cover'
        />
        <Img
          src='img_image_10.png'
          width={388}
          height={254}
          alt='Imageten'
          className='h-[254px] rounded-[24px] object-cover'
        />
      </div>
      <div className='flex w-full flex-col gap-12'>
        <Img
          src='img_image_15.png'
          width={388}
          height={254}
          alt='Imagefifteen'
          className='h-[254px] rounded-[24px] object-cover'
        />
        <Img
          src='img_image_12.png'
          width={388}
          height={500}
          alt='Imagetwelve'
          className='h-[500px] rounded-[24px] object-cover'
        />
      </div> */}
    </div>
  );
};
