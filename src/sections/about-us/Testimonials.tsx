'use client';
import { Heading } from '@/components';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

export const Testimonials = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const items = [
    <div
      key={Math.random()}
      className='item flex flex-col justify-center items-center  me-2 rounded-lg'
      data-value='1'
    >
      <video
        autoPlay
        muted
        playsInline
        controls
        className='rounded-lg'
        src='/videos/vid_example.mov'
      ></video>
      <h1 className='font-semibold text-xl'>Discaury Cruz</h1>
      <div className='text-slate-500'> Fundadora</div>
    </div>,
    <div
      key={Math.random()}
      className='item flex flex-col justify-center items-center  me-2 rounded-lg'
      data-value='1'
    >
      <video
        autoPlay
        muted
        playsInline
        controls
        className='rounded-lg'
        src='/videos/vid_example.mov'
      ></video>
      <h1 className='font-semibold text-xl'>Discaury Cruz</h1>
      <div className='text-slate-500'> Fundadora</div>
    </div>,
    <div
      key={Math.random()}
      className='item flex flex-col justify-center items-center  me-2 rounded-lg'
      data-value='1'
    >
      <video
        autoPlay
        muted
        playsInline
        controls
        className='rounded-lg'
        src='/videos/vid_example.mov'
      ></video>
      <h1 className='font-semibold text-xl'>Discaury Cruz</h1>
      <div className='text-slate-500'> Fundadora</div>
    </div>,
    <div
      key={Math.random()}
      className='item flex flex-col justify-center items-center  me-2 rounded-lg'
      data-value='1'
    >
      <video
        autoPlay
        muted
        playsInline
        controls
        className='rounded-lg'
        src='/videos/vid_example.mov'
      ></video>
      <h1 className='font-semibold text-xl'>Discaury Cruz</h1>
      <div className='text-slate-500'> Fundadora</div>
    </div>,
    <div
      key={Math.random()}
      className='item flex flex-col justify-center items-center  me-2 rounded-lg'
      data-value='1'
    >
      <video
        autoPlay
        muted
        playsInline
        controls
        className='rounded-lg'
        src='/videos/vid_example.mov'
      ></video>
      <h1 className='font-semibold text-xl'>Discaury Cruz</h1>
      <div className='text-slate-500'> Fundadora</div>
    </div>,
    <div
      key={Math.random()}
      className='item flex flex-col justify-center items-center  me-2 rounded-lg'
      data-value='1'
    >
      <video
        autoPlay
        muted
        playsInline
        controls
        className='rounded-lg'
        src='/videos/vid_example.mov'
      ></video>
      <h1 className='font-semibold text-xl'>Discaury Cruz</h1>
      <div className='text-slate-500'> Fundadora</div>
    </div>,
  ];

  // const items = [
  //   {
  //     imgSrc: 'img_image_7.png',
  //     imgAlt: 'Imageeight',
  //     imgWidth: 50,
  //     imgHeight: 50,
  //     textContent: `A visual guide could be a wireframe, creative composition, or information
  //                 architecture. A device that enables`,
  //     headingText: 'Sophie Moore',
  //     subText: 'Web Designer',
  //   },
  //   {
  //     imgSrc: 'img_image_7.png',
  //     imgAlt: 'Imageeight',
  //     imgWidth: 50,
  //     imgHeight: 50,
  //     textContent: `A visual guide could be a wireframe, creative composition, or information
  //                 architecture`,
  //     headingText: 'Sophie Moore',
  //     subText: 'Web Designer',
  //   },
  //   {
  //     imgSrc: 'img_image_7.png',
  //     imgAlt: 'Imageeight',
  //     imgWidth: 50,
  //     imgHeight: 50,
  //     textContent: `A visual guide could be a wireframe, creative composition, or information
  //                 architecture. A device that enables`,
  //     headingText: 'Sophie Moore',
  //     subText: 'Web Designer',
  //   },
  // ];

  return (
    <div className='bg-white-a700 py-[66px] md:py-5 '>
      <div className='flex flex-col items-center gap-[34px]'>
        <div className='flex px-14 md:px-5'>
          <Heading
            data-aos='fade-up'
            color='dark'
            size='heading2xl'
            as='h2'
            className='!font-inter tracking-[-2.40px]'
          >
            Testimonios
          </Heading>
        </div>
        {/* <div
          data-aos='fade-up'
          className='flex items-center justify-center self-stretch md:flex-col'
        >
          <Button
            onClick={() => {
              sliderRef?.current?.slidePrev();
            }}
            className='flex h-[32px] w-[32px] items-center justify-center px-0.5'
          >
            <ChevronLeft />
          </Button> */}
        <div className='mx-auto flex w-full px-14 md:self-stretch md:px-5' data-aos='fade-up'>
          {/* <Slider
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
                <div key={Math.random()} className='flex  justify-center items-center text-center'>
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className='flex w-[44%] flex-col justify-center items-center px-2 md:w-full'
                    >
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
                      <Heading color='dark' size='headinglg' as='h4' className='mb-2 mt-6 md:mr-0'>
                        {item.headingText}
                      </Heading>
                      <Text as='p' className='!text-[16px]'>
                        {item.subText}
                      </Text>
                    </div>
                  ))}
                </div>
              ))}
            /> */}

          <AliceCarousel
            mouseTracking
            autoPlay
            autoPlayInterval={2000}
            items={items}
            responsive={responsive}
            controlsStrategy='alternate'
          />
        </div>
        {/* <Button
            onClick={() => {
              sliderRef?.current?.slideNext();
            }}
            className='flex h-[32px] w-[32px] items-center justify-center px-0.5'
          >
            <ChevronRight />
          </Button> */}
      </div>
    </div>
  );
};
