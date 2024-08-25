import { Heading } from '../../components';
import React from 'react';

export const SectionBlogTwo = () => {
  return (
    <div>
      <div className='flex h-[386px] items-end justify-center bg-gray-900 bg-[url(/images/img_frame_7.png)] bg-cover bg-no-repeat py-[130px] md:h-auto md:py-5'>
        <div className='container-xs mt-4 flex justify-center px-14 md:px-5'>
          <Heading size='heading7' as='h1' className='tracking-[-3.20px] !text-white-a700'>
            Blog
          </Heading>
        </div>
      </div>
    </div>
  );
};
