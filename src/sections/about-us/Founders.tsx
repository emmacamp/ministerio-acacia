import React, { Suspense } from 'react';
import { Founder, Heading, Text } from '@/components';
const founders = [
  {
    src: '/images/founders/founder-2.jpeg',
    userName: 'John Carter',
    phone_hidden: true,
    userDescription:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesu.',
  },
  {
    src: '/images/founders/founder-1.jpeg',
    userName: 'John Carter',
    phone_hidden: false,
    userDescription:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesu.',
  },
  {
    src: '/images/founders/founder-3.jpeg',
    userName: 'Matt Cannon',
    phone_hidden: true,
    userDescription:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesu.',
  },
];

export const Founders = () => {
  return (
    <div className='bg-white-a700 py-[68px] md:py-5'>
      <div className='mb-1 flex flex-col items-center gap-[54px] sm:gap-[27px]'>
        <Heading
          data-aos='fade-up'
          color='dark'
          size='heading2xl'
          as='h2'
          className='!font-inter tracking-[-2.40px]'
        >
          Fundadora
        </Heading>
        <div className='flex gap-2 self-stretch md:flex-col'>
          <Suspense fallback={<div>Loading feed...</div>}>
            {founders.map((d, index) => (
              <Founder {...d} key={`listcontainer-${index}`} />
            ))}
          </Suspense>
        </div>
        <div className='text-center flex justify-center flex-col items-center'>
          <Heading data-aos='fade-up' color='dark' size='headingxl' as='h1' className='mt-[22px]'>
            Discauri Cruz
          </Heading>
          <Text
            data-aos='fade-up'
            size='texts'
            as='p'
            className='mt-8 w-[66%] text-justify !font-inter leading-9 tracking-[3.06px] md:w-full'
          >
            Discauri Cruz es un líder pastoral y profético cuya vida refleja un compromiso profundo
            con el servicio y la transformación espiritual. Su viaje comienza con una sólida
            formación académica y su asignacion de parte de Dios.
            <br />
            <br /> Su llamado le ha llevado a liderar proyectos que benefician a niños, jóvenes,
            adultos y envejecientes en todo el mundo. Con una fe inquebrantable y una dedicación
            ejemplar, ha enfrentado y superado desafíos significativos para servir de manera
            integral.
          </Text>
        </div>
      </div>
    </div>
  );
};
