'use client';
import { Heading } from '@/components';
import { BlogsContainer } from '@/sections';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-11 bg-white-a700'>
      <div>
        <div className='flex h-[386px] items-end justify-center bg-gray-900 bg-[url(/images/sections/blog.png)] bg-cover bg-no-repeat py-[130px] md:h-auto md:py-5'>
          <div className='container-xs mt-4 flex justify-center px-14 md:px-5'>
            <Heading
              data-aos='fade-up'
              size='heading7'
              as='h1'
              className='tracking-[-3.20px] !text-white-a700'
            >
              Blog
            </Heading>
          </div>
        </div>
      </div>
      <BlogsContainer />
    </div>
  );
};

export default HomePage;
