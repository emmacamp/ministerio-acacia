import { Heading } from '@/components';
import { ImageGallery } from '@/components';

export default function GalleryPage() {
  const grids = [
    {
      gap: 'gap-[26px]',
      images: [
        {
          src: 'img_image_14.png',
          width: 388,
          height: 388,
          alt: 'Imagefourteen',
          className: 'h-[388px] rounded-[24px] object-cover',
        },
        {
          src: 'img_image_16.png',
          width: 388,
          height: 388,
          alt: 'Imageseventeen',
          className: 'h-[388px] rounded-[24px] object-cover',
        },
      ],
    },
    {
      gap: 'gap-7',
      images: [
        {
          src: 'img_image_10.png',
          width: 388,
          height: 522,
          alt: 'Imagenine',
          className: 'h-[522px] rounded-[24px] object-cover',
        },
        {
          src: 'img_image_12.png',
          width: 388,
          height: 254,
          alt: 'Imageten',
          className: 'h-[254px] rounded-[24px] object-cover',
        },
      ],
    },
    {
      gap: 'gap-12',
      images: [
        {
          src: 'img_image_15.png',
          width: 388,
          height: 254,
          alt: 'Imagefifteen',
          className: 'h-[254px] rounded-[24px] object-cover',
        },
        {
          src: 'img_image_12.png',
          width: 388,
          height: 500,
          alt: 'Imagetwelve',
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
            <ImageGallery grids={grids} />
          </div>
          {/* <Button className='flex h-[60px] min-w-[250px] flex-row items-center justify-center rounded-lg bg-gray-900 px-[34px] text-center font-dmsans text-[16px] font-bold text-white-a700 sm:px-5'>
            Ver más
          </Button> */}
        </div>
      </div>
    </>
  );
}
