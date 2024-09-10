'use client';
import Link from 'next/link';
import { Heading, Img } from '../../components';
import React, { Suspense } from 'react';
import { dbStore } from '@/store';

// import { useRouter } from 'next/router';
// const products = [
//   {
//     id: '1',
//     name: 'Coffee Bless',
//     price: '300.00',
//     src: '/images/taza-no-bg.webp',
//   },
// ];

export default function ModuloTiendaPage() {
  const products = dbStore().products;
  // const router = useRouter();
  <Img
    src='img_book.svg'
    width={462}
    height={736}
    alt='Book'
    className=' bottom-0 left-[10%] top-0 my-auto h-[736px] w-[36%] object-contain'
  />;
  return (
    <div className='flex flex-col items-center'>
      <div className='self-stretch'>
        <div className='flex h-[386px] items-center justify-center bg-gray-900 bg-[url(/images/IMAGE)] bg-cover bg-no-repeat py-[138px] md:h-auto md:py-5'>
          <div className='container-xs flex justify-center px-14 md:px-5'>
            <Heading
              data-aos='fade-up'
              as='h1'
              size='heading2xl'
              className='!font-inter tracking-[-3.20px] !text-white-a700 phone-md:text-center'
            >
              Conoce Quienes Somos
            </Heading>
          </div>
        </div>
      </div>
      <div className='container-xs   md:px-5'>
        <div className='bg-white-a700 py-16 md:py-5 rounded-xl'>
          <div className='mb-1 flex flex-col items-center gap-[62px] px-[54px] md:px-5 sm:gap-[31px]'>
            <div className='flex flex-col items-center gap-16 self-stretch sm:gap-8'>
              <div className='flex flex-col items-center gap-0.5'>
                <Heading
                  data-aos='fade-up'
                  as='h2'
                  size='headingxl'
                  color='dark'
                  className='!font-poppins tracking-[-0.90px] !text-blue_gray-900_01'
                >
                  Productos
                </Heading>
                <Heading
                  data-aos='fade-up'
                  size='textxs'
                  color='dark'
                  as='h3'
                  className='!font-poppins tracking-[0.10px] !text-blue_gray-500_01'
                >
                  Order it for you or for your beloved ones{' '}
                </Heading>
              </div>
              <div className='grid grid-cols-3 justify-center gap-8 md:grid-cols-2 sm:grid-cols-1'>
                <Suspense fallback={<div>Loading feed...</div>}>
                  {products.map((product) => (
                    <>
                      <Link
                        data-aos='fade-up'
                        href={`/productos/${product.url_path}`}
                        className='w-[350px] h-[400px] rounded-md bg-gray-200/50 border flex flex-col justify-center items-center hover:scale-105 transition-all '
                      >
                        <img alt='Product Image' src={product.imgUrl} className='w-full h-[80%]' />
                        <div className='flex flex-col justify-between text-xl rounded-md bg-white-a700 py-4 px-2 w-full h-[20%]'>
                          <span className='font-bold text-slate-950'>{product.title}</span>
                          <span className='text-lg '>${product.price}</span>
                        </div>
                      </Link>
                    </>
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className='left-0 right-0 top-0 m-auto flex flex-1 flex-col items-center justify-center gap-8 bg-gray-900 py-[216px] md:py-5'>
  <div className=''>
    <div className='mt-[18px] flex w-[94%] flex-col items-end gap-[18px] pl-14 pr-[110px] md:w-full md:px-5'>
      <Heading
        data-aos='fade-up'
        size='heading2xl'
        as='h1'
        className='mr-[88px] !font-inter tracking-[-2.40px] !text-white-a700 md:mr-0'
      >
        Nombre del Libro
      </Heading>
      <Text
        as='p'
        data-aos='fade-up'
        className='w-[52%] text-center !font-inter leading-[26px] !text-white-a700 md:w-full'
      >
        Llevamos la gloria de Dios a cada rincón del mundo, inspirando vidas a través de la fe y la
        esperanza.
      </Text>
    </div>
    <div className='container-xs flex flex-col items-end pl-14 pr-[270px] md:px-5'>
      <Button
        data-aos='fade-up'
        className='flex animate-[bounce_3s_ease-in-out_infinite] h-[78px] min-w-[172px] flex-row items-center justify-center rounded-[10px] bg-white-a700 px-[34px] text-center font-dmsans text-[23.52px] font-bold text-gray-900_e5 md:text-[21px] sm:px-5'
      >
        Comprar
      </Button>
    </div>
  </div>
</div>; */
}
