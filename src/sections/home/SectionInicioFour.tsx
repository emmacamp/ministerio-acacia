import { Button, Heading } from '../../components';

export const SectionInicioFour = () => {
  return (
    <div>
      <div className='bg-gray-900'>
        <div className='flex h-[450px] items-center justify-center bg-[url(/images/img_group_2.png)] bg-cover bg-no-repeat py-[78px] md:h-auto md:py-5'>
          <div className='container-xs flex justify-center px-[34px] md:px-5'>
            <div className='flex w-full flex-col items-center gap-9'>
              <Heading size='heading6' as='h2' className='!font-semibold tracking-[-2.00px]'>
                Tu Apoyo Puede Transformar Vidas
              </Heading>
              <Heading
                size='heading3'
                as='h3'
                className='self-stretch text-center !text-[24.3px] !italic leading-10'
              >
                Con tu donación, ayudas a que el Ministerio Acacia siga llevando esperanza y fe a
                quienes más lo necesitan. Juntos, podemos hacer una diferencia real. ¡Únete a
                nuestra misión hoy!
              </Heading>
              <Button className='flex h-[54px] min-w-[226px] flex-row items-center justify-center rounded-lg bg-white-a700 px-6 text-center text-[16px] font-bold text-gray-900 sm:px-5'>
                Únete a Nuestra Misión
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
