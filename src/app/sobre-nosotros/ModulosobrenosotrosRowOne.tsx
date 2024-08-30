import { Text, Heading } from '@/components';
import React from 'react';

export default function ModulosobrenosotrosRowOne() {
  return (
    <div className='flex justify-center self-stretch'>
      <div className='container-xs flex justify-center md:px-5'>
        <div className='flex space-y-4 w-full flex-col items-center justify-center bg-white-a700 px-14 py-[66px] md:p-5'>
          <div className='flex px-[50px] md:px-5'>
            <Heading
              color='dark'
              size='heading2xl'
              as='h2'
              className='!font-inter tracking-[-2.40px]'
            >
              Ministerio Acacia
            </Heading>
          </div>
          <div className='p-12 text-center rounded-full bg-indigo-900'>
            <Text
              size='texts'
              color='dark'
              as='p'
              className='!font-inter !text-[20.89px] !text-white-a700'
            >
              7 de Marzo
            </Text>
            <Text
              // size='textlg'
              as='p'
              className='text-[50px] !text-white-a700'
            >
              2019
            </Text>
          </div>
          <Text
            as='p'
            className='mt-[76px] w-[66%] text-justify !font-inter leading-9 tracking-[3.06px] md:w-full'
          >
            <span>Desde su fundación el 7 de marzo de 2019, el&nbsp;</span>
            <span className='font-bold'>Ministerio de Dios&nbsp;</span>
            <span>para las Naciones Acacia, bajo la dirección inspiradora de&nbsp;</span>
            <span className='font-bold'>Discauri Cruz</span>
            <span>, ha sido un faro de luz y esperanza. Surgió de un&nbsp;</span>
            <span className='font-bold'>llamado de Dios</span>
            <span>
              &nbsp; para expandir su reino en la tierra, comenzando en Santo Domingo, el lugar que
              Dios nos ha confiado. Nuestra misión es&nbsp;
            </span>
            <span className='font-bold'>audaz y transformadora</span>
            <span>: crear una nueva generación de líderes apasionados por llevar el</span>
            <span className='font-bold'>
              &nbsp;mensaje de Dios a sus hogares, comunidades y más allá.
            </span>
          </Text>
          <blockquote className='py-14 w-[66%] text-center !font-inter leading-8 tracking-[4.08px] md:w-full font-bold'>
            “Transformando vidas y edificando una comunidad de fe sólida, donde cada persona
            encuentra propósito y fortaleza en Cristo.”
          </blockquote>
          <Text
            as='p'
            className='mb-1.5 mt-[54px] w-[66%] text-justify !font-inter leading-9 tracking-[3.06px] md:w-full'
          >
            <span>
              Estamos convencidos del poder transformador del Espíritu Santo y trabajamos con fervor
              para ver esa transformación en cada vida que tocamos. A través de nuestras
              actividades, programas y eventos, no solo&nbsp;
            </span>
            <span className='font-bold'>compartimos el amor de Dios</span>, sino que lo vivimos en
            cada acción, reflejando su amor y poder de manera tangible y concreta.
          </Text>
        </div>
      </div>
    </div>
  );
}
