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
    </div>
  );
};
