'use client';
import { Suspense } from 'react';
import { dbStore } from '@/store';
import { UserProfile } from '@/components';

export const BlogsContainer = () => {
  return (
    <div className='mb-[26px] flex flex-col items-center'>
      <div className='container-xs flex flex-col items-center gap-8 md:px-5'>
        <div className='grid grid-cols-3 justify-center gap-5 self-stretch md:grid-cols-2 sm:grid-cols-1'>
          <Suspense fallback={<div>Loading blogs...</div>}>
            <BlogList />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export const BlogList = () => {
  const { blogs } = dbStore();

  return blogs.map((d, index) => (
    <UserProfile
      userImage={d.userImage}
      url={d.url}
      buttonLabel={d.buttonLabel}
      titleText={d.titleText}
      dateText={d.dateText}
      key={d.titleText + index}
    />
  ));
};
