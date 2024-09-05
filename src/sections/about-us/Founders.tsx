import React, { Suspense } from 'react';
import { Founder, Heading } from '@/components';
const founders = [
  {
    src: '/images/img_image_16.png',
    userName: 'John Carter',
    userDescription:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesu.',
  },
  {
    src: '/images/img_image_21.png',
    userName: 'John Carter',
    userDescription:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesu.',
  },
  {
    src: '/images/img_image_21.png',
    userName: 'Matt Cannon',
    userDescription:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesu.',
  },
];

export const Founders = () => {
  return (
    <div className='bg-white-a700 py-[68px] md:py-5'>
      <div className='mb-1 flex flex-col items-center gap-[54px] sm:gap-[27px]'>
        <Heading
          data-aos='fade-up'
          color='dark'
          size='heading2xl'
          as='h2'
          className='!font-inter tracking-[-2.40px]'
        >
          Fundadores
        </Heading>
        <div className='flex gap-7 self-stretch md:flex-col'>
          <Suspense fallback={<div>Loading feed...</div>}>
            {founders.map((d, index) => (
              <Founder {...d} key={`listcontainer-${index}`} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};
