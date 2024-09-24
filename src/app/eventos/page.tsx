import { EventsList } from '@/sections/events/EventsList';
import { Heading } from '../../components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eventos',
};

const EventsPage = () => {
  return (
    <>
      <div className='flex h-[386px] items-center justify-center bg-gray-900 bg-[url(/images/sections/events.png)] bg-cover bg-no-repeat py-[138px] md:h-auto md:py-5'>
        <div className='container-xs flex justify-center px-14 md:px-5'>
          <Heading
            data-aos='fade-up'
            size='heading7'
            as='h1'
            className='phone-md:text-center tracking-[-3.20px]'
          >
            Conoce Nuestros Eventos
          </Heading>
        </div>
      </div>
      <div className='mt-[76px] flex flex-col items-center'>
        <div className='container-xs md:px-5'>
          <div className='flex flex-col items-center gap-[76px] md:gap-[57px] sm:gap-[38px]'>
            <div className='flex justify-between gap-5 self-stretch md:flex-col flex-wrap gap-y-[38px]'>
              <EventsList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
