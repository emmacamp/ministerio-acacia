import { Heading } from '@/components';
import { Founders, Biography, Testimonials } from '@/sections';

export const metadata = {
  title: 'Sobre Nosotros',
};

export default function AboutUsPage() {
  return (
    <>
      <div className='self-stretch'>
        <div className='flex h-[386px] items-center justify-center bg-gray-900 bg-[url(/images/sections/about-us.png)] bg-cover bg-no-repeat py-[138px] md:h-auto md:py-5'>
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
      <Biography />
      <div className='container-xs md:px-5'>
        <Founders />
        <Testimonials />
      </div>
    </>
  );
}
