'use server';

import { Heading, Img } from '@/components';
import { ContactForm } from '@/components/ContacForm';
import Link from 'next/link';
export const Contact = () => {
  return (
    <div className='relative bg-white-a700 h-[750px] mt-10 tablet:h-[450px]'>
      <div id='contacto' className='mx-auto flex-1'>
        <Img
          src='home/contact.jpeg'
          width={1440}
          height={464}
          alt='contact image home section'
          className='h-[464px] w-full object-cover md:h-auto tablet:hidden'
        />
        <div className='flex tablet:hidden justify-center bg-blue_gray-700 py-[58px] md:py-5'>
          <div className='container-xs mb-[34px] flex items-start justify-center gap-[30px] px-14 md:flex-col md:px-5'>
            <div data-aos='fade-up' className='flex w-[24%] flex-col items-start gap-2 md:w-full'>
              <Heading size='heading5' as='h2' className='!text-[22px] !font-bold'>
                Número Telefónico
              </Heading>
              <a href='tel:8298564016' className='!text-white-a700'>
                (829) 856 - 4016
              </a>
            </div>
            <div
              data-aos='fade-up'
              className='flex w-[68%] flex-col items-start gap-2.5 self-center md:w-full'
            >
              <Link href='#'>
                <Heading size='heading5' as='h3' className='!text-[22px] !font-bold'>
                  Correo Electrónico
                </Heading>
              </Link>
              <div className='flex items-start gap-1 self-stretch'>
                <a href='mailto:acaciateam7@gmail.com' className='!text-white-a700'>
                  acaciateam7@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm className='absolute tablet:relative tablet:mx-auto tablet:top-auto tablet:right-auto tablet:my-0 bottom-0 right-[14%] top-0 my-auto flex h-max w-[32%] flex-col tablet:w-[80%] tablet:items-center items-start rounded-[20px] bg-white-a700 p-[50px] tablet:p-5 max-w-[500px] tablet:border shadow' />
    </div>
  );
};
