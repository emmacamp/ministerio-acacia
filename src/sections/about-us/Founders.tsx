import React, { Suspense } from 'react';
import { Founder, Heading, Text } from '@/components';
const founders = [
  {
    src: '/images/img_image_16.png',
    userName: 'John Carter',
    phone_hidden: true,
    userDescription:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesu.',
  },
  {
    src: '/images/img_image_21.png',
    userName: 'John Carter',
    phone_hidden: false,
    userDescription:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesu.',
  },
  {
    src: '/images/img_image_21.png',
    userName: 'Matt Cannon',
    phone_hidden: true,
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
        <div className='flex gap-2 self-stretch md:flex-col'>
          <Suspense fallback={<div>Loading feed...</div>}>
            {founders.map((d, index) => (
              <Founder {...d} key={`listcontainer-${index}`} />
            ))}
          </Suspense>
        </div>
        <div className='text-center'>
          <Heading data-aos='fade-up' color='dark' size='headingxl' as='h1' className='mt-[22px]'>
            Discauri Cruz
          </Heading>
          <Text
            data-aos='fade-up'
            size='texts'
            as='p'
            className='self-stretch text-center !text-[18px] !font-normal '
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesu.
          </Text>
        </div>
      </div>
    </div>
  );
};
