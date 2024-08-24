import { Button, Heading } from '../../components';

export default function ModuloinicioRowOne() {
  return (
    <div>
      <div className='flex h-[830px] items-center justify-center bg-indigo-900 bg-[url(/images/img_frame_3.png)] bg-cover bg-no-repeat py-[254px] md:h-auto md:py-5'>
        <div className='container-xs flex justify-center px-14 md:px-5'>
          <div className='flex w-[78%] flex-col items-center gap-12 md:w-full'>
            <div className='flex flex-col gap-6 self-stretch'>
              <Heading
                size='headingxl'
                as='h1'
                className='text-center leading-[72px] tracking-[-2.40px]'
              >
                Transformando Vidas, Impactando al Mundo
              </Heading>
              <Heading as='h2' className='text-center !font-bold leading-[26px]'>
                Llevamos la gloria de Dios a cada rincón del mundo, inspirando vidas a través de la
                fe y la esperanza.
              </Heading>
            </div>
            <Button className='flex h-[54px] min-w-[226px] flex-row items-center justify-center rounded-lg bg-white-a700 px-6 text-center text-[16px] font-bold text-gray-900 sm:px-5'>
              Únete a Nuestra Misión
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
