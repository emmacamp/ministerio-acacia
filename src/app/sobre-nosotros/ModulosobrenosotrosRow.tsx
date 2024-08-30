import { Heading } from '../../components';
import React from 'react';

export default function ModulosobrenosotrosRow() {
  return (
    <div className='self-stretch'>
      <div className='flex h-[386px] items-center justify-center bg-gray-900 bg-[url(/images/img_banner.png)] bg-cover bg-no-repeat py-[138px] md:h-auto md:py-5'>
        <div className='container-xs flex justify-center px-14 md:px-5'>
          <Heading
            as='h1'
            size='heading2xl'
            className='!font-inter tracking-[-3.20px] !text-white-a700'
          >
            Conoce Quienes Somos
          </Heading>
        </div>
      </div>
    </div>
  );
}
