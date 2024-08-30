'use client';

import { Button, Img, Text, Heading, Slider } from '@/components';
import ModulosobrenosotrosRow from './ModulosobrenosotrosRow';
import ModulosobrenosotrosRowOne from './ModulosobrenosotrosRowOne';
import React, { Suspense } from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import Founders from './founders';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const founders = [
  {
    src: '/images/img_image_16.png',
    userName: 'John Carter',
    userDescription:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesu.',
  },
  {
    src: 'images/img_image_21.png',
    userName: 'John Carter',
    userDescription:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesu.',
  },
  {
    src: 'images/img_image_21.png',
    userName: 'Matt Cannon',
    userDescription:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesu.',
  },
];

const items = [
  {
    imgSrc: 'img_image_7.png',
    imgAlt: 'Imageeight',
    imgWidth: 50,
    imgHeight: 50,
    textContent: `A visual guide could be a wireframe, creative composition, or information 
                  architecture. A device that enables`,
    headingText: 'Sophie Moore',
    subText: 'Web Designer',
  },
  {
    imgSrc: 'img_image_7.png',
    imgAlt: 'Imageeight',
    imgWidth: 50,
    imgHeight: 50,
    textContent: `A visual guide could be a wireframe, creative composition, or information 
                  architecture`,
    headingText: 'Sophie Moore',
    subText: 'Web Designer',
  },
  {
    imgSrc: 'img_image_7.png',
    imgAlt: 'Imageeight',
    imgWidth: 50,
    imgHeight: 50,
    textContent: `A visual guide could be a wireframe, creative composition, or information 
                  architecture. A device that enables`,
    headingText: 'Sophie Moore',
    subText: 'Web Designer',
  },
];

export default function ModuloSobreNosotrosPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <div>
      <ModulosobrenosotrosRow />
      <ModulosobrenosotrosRowOne />
      <div className='container-xs md:px-5'>
        <div className='bg-white-a700 py-[68px] md:py-5'>
          <div className='mb-1 flex flex-col items-center gap-[54px] sm:gap-[27px]'>
            <Heading
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
                  <Founders {...d} key={`listcontainer-${index}`} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
        <div className='bg-white-a700 py-[66px] md:py-5'>
          <div className='flex flex-col items-center gap-[34px]'>
            <div className='flex px-14 md:px-5'>
              <Heading
                color='dark'
                size='heading2xl'
                as='h2'
                className='!font-inter tracking-[-2.40px]'
              >
                Testimonios
              </Heading>
            </div>
            <div className='flex items-center justify-center self-stretch md:flex-col'>
              <Button
                onClick={() => {
                  sliderRef?.current?.slidePrev();
                }}
                className='flex h-[32px] w-[32px] items-center justify-center px-0.5'
              >
                <ChevronLeft />
              </Button>
              <div className='mx-auto flex w-full px-14 md:self-stretch md:px-5'>
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ '0': { items: 1 }, '551': { items: 1 }, '1051': { items: 1 } }}
                  // disableDotsControls
                  activeIndex={sliderState}
                  onSlideChanged={(e: EventObject) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  items={[...Array(3)].map(() => (
                    <div
                      key={Math.random()}
                      className='flex md:flex-col justify-center items-center text-center'
                    >
                      {items.map((item, index) => (
                        <div key={index} className='flex w-[44%] flex-col justify-center items-center px-2 md:w-full'>
                          <Img
                            src={item.imgSrc}
                            width={item.imgWidth}
                            height={item.imgHeight}
                            alt={item.imgAlt}
                            className=' h-[50px] w-[50px] rounded-full object-cover '
                          />
                          <Text
                            size='texts'
                            as='p'
                            className='mt-5 self-stretch text-center !text-[18px] !font-normal leading-[30px]'
                          >
                            {item.textContent}
                          </Text>
                          <Heading
                            color='dark'
                            size='headinglg'
                            as='h4'
                            className='mb-2 mt-6 md:mr-0'
                          >
                            {item.headingText}
                          </Heading>
                          <Text as='p' className='!text-[16px]'>
                            {item.subText}
                          </Text>
                        </div>
                      ))}
                    </div>
                  ))}
                />
              </div>
              <Button
                onClick={() => {
                  sliderRef?.current?.slideNext();
                }}
                className='flex h-[32px] w-[32px] items-center justify-center px-0.5'
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
