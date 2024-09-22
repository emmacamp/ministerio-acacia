import { UserProfile } from '@/components';
import React, { Suspense } from 'react';
import { dbStore } from '@/store';

export const BlogsContainer = () => {
  const { blogs } = dbStore();
  return (
    <div className='mb-[26px] flex flex-col items-center'>
      <div className='container-xs flex flex-col items-center gap-8 md:px-5'>
        <div className='grid grid-cols-3 justify-center gap-5 self-stretch md:grid-cols-2 sm:grid-cols-1'>
          <Suspense fallback={<div>Loading feed...</div>}>
            {blogs.map((d, index) => (
              <UserProfile {...d} key={'content' + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};
