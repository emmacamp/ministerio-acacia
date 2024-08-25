import { Button, Heading, UserProfile } from '@/components/index';
import React, { Suspense } from 'react';

const data = [
  {
    userImage: 'img_image_15.png',
    buttonLabel: 'Adoración',
    titleText: 'The Impact of Technology on the Workplace: How Technology is Changing',
    dateText: 'August 20, 2022',
    url: 'test',
  },
  {
    userImage: 'img_image_10.png',
    buttonLabel: 'Adoración',
    titleText: 'The Impact of Technology on the Workplace: How Technology is Changing',
    dateText: 'August 20, 2022',
    url: 'test',
  },
  {
    userImage: 'img_image_13.png',
    buttonLabel: 'Adoración',
    titleText: 'The Impact of Technology on the Workplace: How Technology is Changing',
    dateText: 'August 20, 2022',
    url: 'test',
  },
  {
    userImage: 'img_image_16.png',
    buttonLabel: 'Adoración',
    titleText: 'The Impact of Technology on the Workplace: How Technology is Changing',
    dateText: 'August 20, 2022',
    url: 'test',
  },
  {
    userImage: 'img_image_14.png',
    buttonLabel: 'Adoración',
    titleText: 'The Impact of Technology on the Workplace: How Technology is Changing',
    dateText: 'August 20, 2022',
    url: 'test',
  },
  {
    userImage: 'img_image_15.png',
    buttonLabel: 'Adoración',
    titleText: 'The Impact of Technology on the Workplace: How Technology is Changing',
    dateText: 'August 20, 2022',
    url: 'test',
  },
  {
    userImage: 'img_image_15.png',
    buttonLabel: 'Adoración',
    titleText: 'The Impact of Technology on the Workplace: How Technology is Changing',
    dateText: 'August 20, 2022',
    url: 'test',
  },
  {
    userImage: 'img_image_10.png',
    buttonLabel: 'Adoración',
    titleText: 'The Impact of Technology on the Workplace: How Technology is Changing',
    dateText: 'August 20, 2022',
    url: 'test',
  },
  {
    userImage: 'img_image_18.png',
    buttonLabel: 'Adoración',
    titleText: 'The Impact of Technology on the Workplace: How Technology is Changing',
    dateText: 'August 20, 2022',
    url: 'test',
  },
];

export const SectionBlogOne = () => {
  return (
    <div className='mb-[26px] flex flex-col items-center'>
      <div className='container-xs flex flex-col items-center gap-8 md:px-5'>
        <div className='grid grid-cols-3 justify-center gap-5 self-stretch md:grid-cols-2 sm:grid-cols-1'>
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile {...d} key={'content' + index} />
            ))}
          </Suspense>
        </div>
        <div className='flex w-[26%] justify-center gap-1.5 md:w-full'>
          <Button className='flex h-[40px] min-w-[40px] flex-row items-center justify-center rounded-lg bg-gray-900 px-4 text-center font-inter text-[14px] font-medium text-white-a700'>
            1
          </Button>
          <Button className='flex h-[40px] min-w-[40px] flex-row items-center justify-center rounded-lg bg-blue_gray-700 px-3.5 text-center font-inter text-[14px] font-medium text-white-a700'>
            2
          </Button>
          <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
            <Heading as='h2'>3</Heading>
          </div>
          <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
            <Heading as='h3' className='mt-2'>
              ...
            </Heading>
          </div>
          <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
            <Heading as='h4'>8</Heading>
          </div>
          <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
            <Heading as='h5'>9</Heading>
          </div>
          <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
            <Heading as='h6'>10</Heading>
          </div>
        </div>
      </div>
    </div>
  );
};
