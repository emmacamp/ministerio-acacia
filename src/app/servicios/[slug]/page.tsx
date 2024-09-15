'use client';

import { Heading, Text } from '@/components';
import { dbStore } from '@/store';
import { useParams } from 'next/navigation';

export default function ServiceDetails() {
  const { slug } = useParams<{ slug: string }>();
  const service = dbStore().getService(slug);

  return (
    <div>
      <div className='flex h-[386px] items-center justify-center bg-gray-900 bg-[url(/images/img_banner.png)] bg-cover bg-no-repeat py-[138px] md:h-auto md:py-5'>
        <div className='container-xs flex justify-center px-14 md:px-5'>
          <Heading
            data-aos='fade-up'
            as='h1'
            size='heading2xl'
            className='!font-inter text-center tracking-[-3.20px] !text-white-a700'
          >
            {service?.title}
          </Heading>
        </div>
      </div>
      <div className='mt-[72px] flex justify-center'>
        <div className='container-xs flex justify-center px-14 md:px-5'>
          <Text color='dark' as='p' className='w-[66%]  !font-inter leading-9 tracking-[3.06px]'>
            <Heading
              color='dark'
              size='headinglg'
              as='h1'
              className='!font-dmsans mb-3 '
              data-aos='fade-up'
            >
              {service?.subtitle}
            </Heading>
            <p className='mb-10 '>{service?.description}</p>
            <ul
              data-aos='fade-up'
              // key={des.subtitle}
              className='flex flex-col gap-3 list-disc'
            >
              {service?.content.map((des) => (
                <>
                  {des?.subtitle && (
                    <li data-aos='fade-up' className='flex flex-col gap-5 my-5 list-disc'>
                      <Heading color='dark' size='headinglg' as='h1' className='!font-dmsans'>
                        &gt; {des?.subtitle}
                      </Heading>
                      <p className='ms-5'>{des?.paragraph}</p>
                    </li>
                  )}
                </>
              ))}
            </ul>
          </Text>
        </div>
      </div>
      <div className=''></div>
    </div>
  );
}
