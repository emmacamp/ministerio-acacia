'use client';

import { Footer, Header } from '@/components';
import { SectionEventsOne, SectionEventsTwo } from '@/sections';

const EventsPage = () => {
  return (
    <div className='w-full bg-white-a700'>
      <Header />
      <SectionEventsOne />
      <SectionEventsTwo />
      <div className='mt-[118px]'>
        <div className='flex justify-center bg-white-a700'>
          <div className='container-xs mb-2.5 flex justify-center md:px-5'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
