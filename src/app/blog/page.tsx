'use client';

import { SectionBlogOne, SectionBlogTwo } from '@/sections';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-11 bg-white-a700'>
      <SectionBlogTwo />
      <SectionBlogOne />
    </div>
  );
};

export default HomePage;
