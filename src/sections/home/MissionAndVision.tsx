'use client';
import { Heading, Img, Text } from '@/components';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const MissionAndVision = () => {
  return (
    <div>
      <div className='flex justify-center bg-blue_gray-700 py-14 md:py-5 px-4'>
        <div className='container-xs flex justify-center md:px-5'>
          <div
            data-aos='fade-up'
            className='flex w-full items-center gap-5 rounded-[40px] bg-white-a700 px-[42px] py-[46px] md:flex-col md:p-5'
          >
            <Img
              src='img_image_7.png'
              width={536}
              height={670}
              alt='Imageseven'
              className='tablet:hidden tablet:h-[170px] tablet:w-32  h-[670px] w-[48%] rounded-[40px] object-contain md:w-full '
            />
            <div className='flex flex-1 flex-col items-center gap-6 md:self-stretch'>
              <Heading
                size='heading5'
                as='h2'
                className='w-[98%] phone-md:text-center phone-md:leading-[50px] tracking-[-2.00px] !text-gray-900 md:w-full'
              >
                Transformando Vidas e Impactando las Naciones
              </Heading>
              <MissionVisionText />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MissionVisionText = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const SCREEN_WIDTH = 600;

  useEffect(() => {
    if (window.innerWidth <= SCREEN_WIDTH) {
      setIsExpanded(false);
    }
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-full'>
      {/* Primer párrafo (siempre visible) */}
      <Text size='textxs' as='p' className='w-full !font-inter leading-7 tracking-[2.55px]'>
        <span>La&nbsp;</span>
        <span className='font-bold'>misión de Acacia</span>
        <span>
          &nbsp;se centra en <span className='font-bold'>transformar vidas</span> mediante el poder
          del Espíritu Santo. Su propósito es guiar a las personas hacia una&nbsp;
        </span>
        <span className='font-bold'>relación profunda con Dios</span>
        <span>
          , ofreciendo salvación y restauración espiritual. Además, se enfoca en empoderar a cada
          individuo para que descubra y viva su propósito divino, inspirando una vida llena de fe y
          acción.
        </span>
      </Text>

      {/* Segundo párrafo (toggle visibility) */}
      <Text
        size='textxs'
        as='p'
        className={cn('w-full !font-inter leading-7 tracking-[2.55px]', {
          '!block': isExpanded,
          '!hidden': !isExpanded,
        })}
      >
        <span>En cuanto a su&nbsp;</span>
        <span className='font-bold'>visión</span>
        <span>, Acacia aspira a impactar globalmente a través de la&nbsp;</span>
        <span className='font-bold'>manifestación palpable de Dios</span>, extendiendo su gloria por
        todo el mundo. Se comprometen a ser testigos fieles y a{' '}
        <span className='font-bold'>capacitar</span> a nuevas generaciones de{' '}
        <span className='font-bold'>líderes proféticos</span> que continuarán esta misión,
        asegurando que el mensaje de Dios siga siendo compartido con{' '}
        <span className='font-bold'>pasión</span> y <span className='font-bold'>propósito</span>.
      </Text>

      {/* Botón para ver más/menos (solo en mobile) */}
      <button onClick={toggleExpand} className='mt-4 text-blue-500 '>
        {isExpanded ? 'Ver menos' : 'Ver más'}
      </button>
    </div>
  );
};
