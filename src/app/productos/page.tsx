import { Heading, Button, Img, Text } from '../../components';
import React, { Suspense } from 'react';

const data = [{ productcardone: 'img_product_card.png' }];

export default function ModuloTiendaPage() {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative h-[778px] self-stretch'>
        <div className='absolute left-0 right-0 top-0 m-auto flex flex-1 flex-col items-center justify-center gap-8 bg-gray-900 py-[216px] md:py-5'>
          <div className='mt-[18px] flex w-[94%] flex-col items-end gap-[18px] pl-14 pr-[110px] md:w-full md:px-5'>
            <Heading
              size='heading2xl'
              as='h1'
              className='mr-[88px] !font-inter tracking-[-2.40px] !text-white-a700 md:mr-0'
            >
              Nombre del Libro
            </Heading>
            <Text
              as='p'
              className='w-[52%] text-center !font-inter leading-[26px] !text-white-a700 md:w-full'
            >
              Llevamos la gloria de Dios a cada rincón del mundo, inspirando vidas a través de la fe
              y la esperanza.
            </Text>
          </div>
          <div className='container-xs flex flex-col items-end pl-14 pr-[270px] md:px-5'>
            <Button className='flex h-[78px] min-w-[172px] flex-row items-center justify-center rounded-[10px] bg-white-a700 px-[34px] text-center font-dmsans text-[23.52px] font-bold text-gray-900_e5 md:text-[21px] sm:px-5'>
              Comprar
            </Button>
          </div>
        </div>
        <Img
          src='img_book.svg'
          width={462}
          height={736}
          alt='Book'
          className='absolute bottom-0 left-[10%] top-0 my-auto h-[736px] w-[36%] object-contain'
        />
      </div>
      <div className='container-xs relative z-[1] mt-[-42px] md:px-5'>
        <div className='bg-white-a700 py-16 md:py-5'>
          <div className='mb-1 flex flex-col items-center gap-[62px] px-[54px] md:px-5 sm:gap-[31px]'>
            <div className='flex flex-col items-center gap-16 self-stretch sm:gap-8'>
              <div className='flex flex-col items-center gap-0.5'>
                <Heading
                  as='h2'
                  size='headingxl'
                  color='dark'
                  className='!font-poppins tracking-[-0.90px] !text-blue_gray-900_01'
                >
                  Productos
                </Heading>
                <Heading
                  size='textxs'
                  color='dark'
                  as='h3'
                  className='!font-poppins tracking-[0.10px] !text-blue_gray-500_01'
                >
                  Order it for you or for your beloved ones{' '}
                </Heading>
              </div>
              <div className='grid grid-cols-4 justify-center gap-[30px] self-stretch md:grid-cols-2 sm:grid-cols-1'>
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map(() => (
                    <>
                      <div className='w-[254px] h-[230px] bg-slate-300 flex flex-col'>
                        <Img src='img_header_logo.png' width={205} height={220} className=''></Img>
                        <div className='footer bg-blue-200 w-full h-[20%]'></div>
                      </div>
                    </>
                  ))}
                </Suspense>
              </div>
            </div>
            {/* <div className='flex w-[28%] justify-center gap-1.5 md:w-full'>
              <Button className='flex h-[40px] min-w-[40px] flex-row items-center justify-center rounded-lg bg-teal-600 px-4 text-center font-inter text-[14px] font-medium text-white-a700'>
                1
              </Button>
              <Button className='flex h-[40px] min-w-[40px] flex-row items-center justify-center rounded-lg bg-teal-600_7f px-3.5 text-center font-inter text-[14px] font-medium text-white-a700'>
                2
              </Button>
              <div className='flex w-full flex-col items-center rounded-lg'>
                <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
                  <Heading
                    size='textxs'
                    as='h4'
                    className='!font-inter !text-[14px] !text-blue_gray-500'
                  >
                    3
                  </Heading>
                </div>
              </div>
              <div className='flex w-full flex-col items-center rounded-lg'>
                <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
                  <Heading
                    size='textxs'
                    as='h5'
                    className='mt-2 !font-inter !text-[14px] !text-blue_gray-500'
                  >
                    ...
                  </Heading>
                </div>
              </div>
              <div className='flex w-full flex-col items-center rounded-lg'>
                <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
                  <Heading
                    size='textxs'
                    as='h6'
                    className='!font-inter !text-[14px] !text-blue_gray-500'
                  >
                    8
                  </Heading>
                </div>
              </div>
              <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
                <Heading
                  size='textxs'
                  as='p'
                  className='!font-inter !text-[14px] !text-blue_gray-500'
                >
                  9
                </Heading>
              </div>
              <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
                <Heading
                  size='textxs'
                  as='p'
                  className='!font-inter !text-[14px] !text-blue_gray-500'
                >
                  10
                </Heading>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
