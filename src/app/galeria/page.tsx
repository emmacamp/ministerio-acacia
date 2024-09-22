import { Heading } from '@/components';
import { ImageGallery } from '@/components';

export default function GalleryPage() {
  const grids = [
    {
      gap: 'gap-[26px]',
      images: [
        {
          src: 'gallery/g1.jpeg',
          width: 388,
          height: 388,
          alt: 'gallery image',
          className: 'h-[388px] rounded-[24px] object-cover',
        },
        {
          src: 'gallery/g2.jpeg',
          width: 388,
          height: 388,
          alt: 'gallery image',
          className: 'h-[388px] rounded-[24px] object-cover',
        },
      ],
    },
    {
      gap: 'gap-7',
      images: [
        {
          src: 'gallery/g3.jpeg',
          width: 388,
          height: 522,
          alt: 'gallery image',
          className: 'h-[522px] rounded-[24px] object-cover',
        },
        {
          src: 'gallery/g4.jpeg',
          width: 388,
          height: 254,
          alt: 'gallery image',
          className: 'h-[254px] rounded-[24px] object-cover',
        },
      ],
    },
    {
      gap: 'gap-12',
      images: [
        {
          src: 'gallery/g5.jpeg',
          width: 388,
          height: 254,
          alt: 'gallery image',
          className: 'h-[254px] rounded-[24px] object-cover',
        },
        {
          src: 'gallery/g6.jpeg',
          width: 388,
          height: 500,
          alt: 'gallery image',
          className: 'h-[500px] rounded-[24px] object-cover',
        },
      ],
    },
  ];

  const grids2 = [
    {
      gap: 'gap-[26px]',
      images: [
        {
          src: 'gallery/g7.jpeg',
          width: 388,
          height: 388,
          alt: 'gallery image',
          className: 'h-[388px] rounded-[24px] object-cover',
        },
        {
          src: 'gallery/g8.jpeg',
          width: 388,
          height: 388,
          alt: 'gallery image',
          className: 'h-[388px] rounded-[24px] object-cover',
        },
      ],
    },
    {
      gap: 'gap-7',
      images: [
        {
          src: 'gallery/g9.jpeg',
          width: 388,
          height: 522,
          alt: 'gallery image',
          className: 'h-[522px] rounded-[24px] object-cover',
        },
        {
          src: 'gallery/g10.jpeg',
          width: 388,
          height: 254,
          alt: 'gallery image',
          className: 'h-[254px] rounded-[24px] object-cover',
        },
      ],
    },
    {
      gap: 'gap-12',
      images: [
        {
          src: 'gallery/g11.jpeg',
          width: 388,
          height: 254,
          alt: 'gallery image',
          className: 'h-[254px] rounded-[24px] object-cover',
        },
        {
          src: 'gallery/g12.jpeg',
          width: 388,
          height: 500,
          alt: 'gallery image',
          className: 'h-[500px] rounded-[24px] object-cover',
        },
      ],
    },
  ];

  const grids3 = [
    {
      gap: 'gap-[26px]',
      images: [
        {
          src: 'gallery/g13.jpeg',
          width: 388,
          height: 388,
          alt: 'gallery image',
          className: 'h-[388px] rounded-[24px] object-cover',
        },
        {
          src: 'gallery/g14.jpeg',
          width: 388,
          height: 388,
          alt: 'gallery image',
          className: 'h-[388px] rounded-[24px] object-cover',
        },
      ],
    },
    {
      gap: 'gap-7',
      images: [
        {
          src: 'gallery/g15.jpeg',
          width: 388,
          height: 522,
          alt: 'gallery image',
          className: 'h-[522px] rounded-[24px] object-cover',
        },
        {
          src: 'gallery/g16.jpeg',
          width: 388,
          height: 254,
          alt: 'gallery image',
          className: 'h-[254px] rounded-[24px] object-cover',
        },
      ],
    },
    {
      gap: 'gap-12',
      images: [
        {
          src: 'gallery/g17.jpeg',
          width: 388,
          height: 254,
          alt: 'gallery image',
          className: 'h-[254px] rounded-[24px] object-cover',
        },
        {
          src: 'gallery/g18.jpeg',
          width: 388,
          height: 500,
          alt: 'gallery image',
          className: 'h-[500px] rounded-[24px] object-cover',
        },
      ],
    },
  ];

  const grids4 = [
    {
      gap: 'gap-[26px]',
      images: [
        {
          src: 'gallery/g19.jpeg',
          width: 388,
          height: 388,
          alt: 'gallery image',
          className: 'h-[388px] rounded-[24px] object-cover',
        },
        {
          src: 'gallery/g20.jpeg',
          width: 388,
          height: 388,
          alt: 'gallery image',
          className: 'h-[388px] rounded-[24px] object-cover',
        },
      ],
    },
    {
      gap: 'gap-7',
      images: [
        {
          src: 'gallery/g21.jpeg',
          width: 388,
          height: 522,
          alt: 'gallery image',
          className: 'h-[522px] rounded-[24px] object-cover',
        },
        {
          src: 'gallery/g22.jpeg',
          width: 388,
          height: 254,
          alt: 'gallery image',
          className: 'h-[254px] rounded-[24px] object-cover',
        },
      ],
    },
    {
      gap: 'gap-12',
      images: [
        {
          src: 'gallery/g23.jpeg',
          width: 388,
          height: 254,
          alt: 'gallery image',
          className: 'h-[254px] rounded-[24px] object-cover',
        },
        {
          src: 'gallery/g24.jpeg',
          width: 388,
          height: 500,
          alt: 'gallery image',
          className: 'h-[500px] rounded-[24px] object-cover',
        },
      ],
    },
  ];

  return (
    <>
      <div className='flex h-[386px] items-center justify-center bg-gray-900 bg-[url(/images/sections/gallery.png)] bg-cover bg-no-repeat py-[138px] md:h-auto md:py-5'>
        <div className='container-xs flex justify-center px-14 md:px-5'>
          <Heading as='h1' data-aos='fade-up' size='heading7' className='tracking-[-3.20px]'>
            Galeria
          </Heading>
        </div>
      </div>
      <div className='mt-[68px] flex flex-col items-center'>
        <div className='container-xs flex flex-col items-center gap-28 md:gap-[84px] md:px-5 sm:gap-14'>
          <div className='flex flex-col gap-9 self-stretch'>
            <ImageGallery grids={grids} />
            <ImageGallery grids={grids2} />
            <ImageGallery grids={grids3} />
            <ImageGallery grids={grids4} />
          </div>
        </div>
      </div>
    </>
  );
}
