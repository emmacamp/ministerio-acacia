import { Heading } from '@/components';
import { ServicesContainer } from '@/sections';
import { Suspense } from 'react';

export default function ServicePage() {
  return (
    <>
      <div className='self-stretch'>
        <div className='flex h-[386px] items-center justify-center bg-gray-900 bg-[url(/images/sections/services.png)] bg-cover bg-no-repeat py-[138px] md:h-auto md:py-5'>
          <div className='container-xs flex justify-center px-14 md:px-5'>
            <Heading as='h1' data-aos='fade-up' size='heading7' className='tracking-[-3.20px]'>
              Conoce Nuestros Servicios
            </Heading>
          </div>
        </div>
      </div>
      <div className='container-xs mt-14 md:px-5'>
        <div className='flex gap-7 md:flex-col'>
          <Suspense fallback={<div>Loading feed...</div>}>
            <ServicesContainer />
          </Suspense>
        </div>
      </div>
    </>
  );
}
