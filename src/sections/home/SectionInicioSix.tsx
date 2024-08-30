'use server';

import { Button, Heading, Img, Input, TextArea, Text } from '@/components';
import { ContactForm } from '@/components/ContacForm';
import Link from 'next/link';

export const SectionInicioSix = () => {
  return (
    <div>
      <div className='bg-white-a700'>
        <div className='relative h-[750px] content-center bg-white-a700 md:h-auto'>
          <div className='mx-auto flex-1'>
            <Img
              src='img_image_21_464x1440.png'
              width={1440}
              height={464}
              alt='Imagetwentyone'
              className='h-[464px] w-full object-cover md:h-auto'
            />
            <div className='flex justify-center bg-blue_gray-700 py-[58px] md:py-5'>
              <div className='container-xs mb-[34px] flex items-start justify-center gap-[30px] px-14 md:flex-col md:px-5'>
                <div className='flex w-[24%] flex-col items-start gap-2 md:w-full'>
                  <Heading size='heading5' as='h2' className='!text-[22px] !font-bold'>
                    Visitanos
                  </Heading>
                  <Text as='p' className='leading-[30px] !text-white-a700'>
                    <>
                      58 Middle Point Rd
                      <br />
                      San Francisco, 94124
                    </>
                  </Text>
                </div>
                <div className='flex w-[68%] flex-col items-start gap-2.5 self-center md:w-full'>
                  <Link href='#'>
                    <Heading size='heading5' as='h3' className='!text-[22px] !font-bold'>
                      Contactanos
                    </Heading>
                  </Link>
                  <div className='flex flex-col items-start gap-1 self-stretch'>
                    <Text as='p' className='!text-white-a700'>
                      (829) 856 - 4016
                    </Text>
                    {/* <Text as='p' className='!text-white-a700'>
                      (123) 456 - 789
                    </Text> */}
                    <Text as='p' className='!text-white-a700'>
                      acaciateam7@gmail.com
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
         
        </div>
      </div>
    </div>
  );
};
