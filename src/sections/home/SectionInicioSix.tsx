'use client';

import { Button, Heading, Img, Input, TextArea, Text } from '@/components';
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
                    Visit Us
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
                      Contact Us
                    </Heading>
                  </Link>
                  <div className='flex flex-col items-start gap-1 self-stretch'>
                    <Text as='p' className='!text-white-a700'>
                      (829)-856-4016
                    </Text>
                    <Text as='p' className='!text-white-a700'>
                      (123) 456 - 789
                    </Text>
                    <Text as='p' className='!text-white-a700'>
                      contact@company.com
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 right-[14%] top-0 my-auto flex h-max w-[32%] flex-col items-start rounded-[20px] bg-white-a700 p-[50px] md:p-5'>
            <Heading
              size='heading6'
              as='h4'
              className='!text-[24px] !text-gray-900 md:!text-[22px]'
            >
              Contactanos
            </Heading>
            <Text as='p'>We want to hear from you</Text>
            <div className='mt-[30px] flex flex-col gap-7 self-stretch'>
              <div className='flex flex-col gap-6'>
                <Input
                  type='text'
                  name='name'
                  placeholder={`Name`}
                  className='flex h-[50px] items-center justify-center rounded-lg bg-blue_gray-700_4c px-6 text-[16px] text-gray-900 sm:px-5'
                />
                <Input
                  type='email'
                  name='email'
                  placeholder={`Email`}
                  className='flex h-[50px] items-center justify-center rounded-lg bg-blue_gray-700_4c px-6 text-[16px] text-gray-900 sm:px-5'
                />
              </div>
              <TextArea
                name='masterinput_one'
                placeholder={`Please type your message here...`}
                className='h-[114px] rounded-lg bg-blue_gray-700_4c px-6 py-3 text-[16px] text-gray-900 sm:px-5'
              />
              <Button className='flex h-[54px] flex-row items-center justify-center self-stretch rounded-[26px] bg-blue_gray-700 px-[34px] text-center text-[16px] font-bold text-white-a700 sm:px-5'>
                Send message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
