'use client';

import { Footer, Header } from '@/components';
import { SectionBlogOne, SectionBlogTwo } from '@/sections';

const HomePage = () => {
  return (
    <div className='w-full bg-white-a700'>
      <Header />
      <div className='flex flex-col gap-11 bg-white-a700'>
        <SectionBlogTwo />
        <SectionBlogOne />
      </div>
      <div className='mt-24'>
        <div className='flex justify-center bg-white-a700'>
          <div className='container-xs mb-2.5 flex justify-center md:px-5'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
