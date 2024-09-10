'use client';
import { Heading } from '@/components';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

export const Testimonials = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const testimonials = [
    {
      src: '/videos/testimonios/Testimonio-ruta-acacia-kids.mp4',
      person: 'Ramona Rosario',
      role: 'Líder Iglesia Fuente de Amor',
    },
    {
      src: '/videos/testimonios/Testimonio-campamento-2024.mp4',
      person: 'Loida Wilson',
      role: 'Líder Ministerio de Niños (La Romana)',
    },
    {
      src: '/videos/testimonios/Testimonio-Ezequiel-Silva.mp4',
      person: 'Ezequiel Silva',
      role: 'Misiterio de Jovenes',
    },
    {
      src: '/videos/testimonios/Testimonio.mp4',
      person: 'Mireya José',
      role: 'Líder de Intercepción',
    },
  ];

  const items = testimonials.map((tsm) => (
    <div
      key={Math.random()}
      className='item flex flex-col rounded-lg overflow-hidden justify-center items-center gap-2   w-[350px] h-[700px]'
      data-value='1'
    >
      <video src={tsm.src} autoPlay muted playsInline controls className='rounded-lg' />
      <h1 className='font-semibold text-xl'>{tsm.person}</h1>
      <div className='text-slate-500'>{tsm.role}</div>
    </div>
  ));

  return (
    <div className='bg-white-a700 py-[66px] md:py-5 '>
      <div className='flex flex-col items-center gap-[34px]'>
        <div className='flex px-14 md:px-5'>
          <Heading
            data-aos='fade-up'
            color='dark'
            size='heading2xl'
            as='h2'
            className='!font-inter tracking-[-2.40px]'
          >
            Testimonios
          </Heading>
        </div>

        <div className='mx-auto flex w-full px-14 md:self-stretch md:px-5' data-aos='fade-up'>
          <AliceCarousel
            mouseTracking
            autoPlay
            infinite
            autoPlayInterval={2000}
            items={items}
            responsive={responsive}
            controlsStrategy='alternate'
            disableButtonsControls
            autoPlayControls
          />
        </div>
      </div>
    </div>
  );
};
