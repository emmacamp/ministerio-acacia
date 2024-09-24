import Link from 'next/link';
import { Heading, Text } from '../../components';
import Image from 'next/image';
import { ProductsContainer } from '@/sections/products/ProductsContainer';
import { TypewriterClient } from '@/sections/products/TypewriterClient';
import { Metadata } from 'next';

// meta tags
export const metadata: Metadata = {
  title: 'Productos',
  description: 'Tienda de libros',
};

export default function ModuloTiendaPage() {
  return (
    <div className='flex flex-col items-center'>
      <div className='self-stretch'>
        <div className='flex flex-col items-center phone-md:py-20 justify-center bg-black-900  bg-cover bg-no-repeat py-[10px] md:h-auto md:py-5'>
          <div className='container mx-auto phone-md:mb-32 flex tablet:flex-col-reverse items-center justify-between px-4'>
            {/* Image Section */}
            <div className='w-1/2  tablet:w-full tablet:justify-center tablet:pl-14 flex items-center rounded-lg justify-end'>
              <Image
                src='/images/3d-acacia-book.png' // Ruta correcta de la imagen
                alt='Portada del libro Mas Que Vencedores'
                width={500} // Ancho de la imagen
                height={700} // Altura de la imagen
                className='h-auto phone-md:w-[60%]  relative top-[50px] '
              />
            </div>

            {/* Text Section */}
            <div className='w-1/2 phone-md:w-auto tablet:text-center tablet:w-full flex flex-col justify-center tablet:items-center phone-md:p-0 pl-12'>
              <Heading size='heading7' className='text-[80px]  tracking-[-0.90px]'>
                MAS QUE
                <br />
                <div className='h-[100px] tablet:h-auto phone-md:h-[80px]'>
                  <TypewriterClient />
                </div>
              </Heading>
              <Text
                color='white'
                className='px-3 text-lg mb-6 uppercase font-semibold !font-poppins  tracking-[10px]'
              >
                Rompiendo barreras
              </Text>

              {/* CTA Button */}
              <Link
                href='#comprar'
                className='phone-md:hidden bg-white-a700 w-[500px] phone-md:w-full  animate-[bounce_3s_ease-in-out_infinite] text-white py-3 px-8 rounded-full shadow-lg hover:bg-slate-50 transition duration-300 text-center'
              >
                Comprar Ahora
              </Link>
            </div>
          </div>{' '}
          <Link
            href='#comprar'
            className='bg-white-a700 hidden phone-md:block w-[50%] phone-md:w-[90%]  animate-[bounce_3s_ease-in-out_infinite] text-white py-3 px-8 rounded-full shadow-lg hover:bg-slate-50 transition duration-300 text-center'
          >
            Comprar Ahora
          </Link>{' '}
        </div>
      </div>
      <div className='container-xs md:px-5'>
        <div className='bg-white-a700 py-16 md:py-5 rounded-xl'>
          <div className='mb-1 flex flex-col items-center gap-[62px] px-[54px] md:px-5 sm:gap-[31px]'>
            <div className='flex flex-col items-center gap-16 self-stretch sm:gap-8'>
              <div id='productos' className='flex flex-col items-center gap-0.5'>
                <Heading
                  // data-aos='fade-up'
                  as='h2'
                  size='heading7'
                  color='dark'
                  className='!font-poppins tracking-[-0.90px] !text-blue_gray-900_01'
                >
                  Productos
                </Heading>
                <Heading
                  size='heading1'
                  color='dark'
                  as='h3'
                  className='!font-poppins phone-md:text-center tracking-[0.10px] !text-blue_gray-500_01'
                >
                  Ordénalo para ti o para tus seres queridos{' '}
                </Heading>
              </div>
              <div className='grid grid-cols-3 items-center justify-center gap-8 tablet:grid-cols-2 phone-md:grid-cols-1'>
                <ProductsContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
