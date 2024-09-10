import { Heading } from '@/components';
import Link from 'next/link';
import './typewriter.css';
import Typewriter from './typewriter';

export const Hero = () => {
  return (
    <div className='relative h-[830px] md:h-auto'>
      {/* Video de fondo */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src='/videos/home-video.mp4'
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Contenido del hero */}
      <div className='relative flex h-full items-center justify-center bg-black-900 bg-opacity-60 py-[254px] md:py-5'>
        <div className='container-xs flex justify-center px-14 md:px-5'>
          <div className='flex w-[78%] flex-col items-center gap-12 md:w-full'>
            <div data-aos='fade-up' className='flex flex-col gap-6 self-stretch'>
              <Typewriter />
              {/* <Heading
                size='heading7'
                as='h1'
                className='text-center text-white leading-[72px] tracking-[-2.40px]'
              >
                Transformando <br />
                <span className='bg-white-a700 text-black-900 mix-blend-screen'>Vidas</span>,{' '}
                <span className='typewriter '>
                  <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    Impactando
                  </h1>
                </span>{' '}
                al Mundo
              </Heading> */}
              <Heading as='h2' className='text-center text-white !font-bold leading-[26px]'>
                Llevamos la gloria de Dios a cada rincón del mundo, inspirando vidas a través de la
                fe y la esperanza.
              </Heading>
            </div>{' '}
            <Link
              href={'/sembrar'}
              className='bg-white-a700 font-bold text-black-900 mix-blend-screen shadow-sm  px-4 py-2 rounded-md text-xl animate-[bounce_3s_ease-in-out_infinite]'
            >
              Únete a Nuestra Misión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
