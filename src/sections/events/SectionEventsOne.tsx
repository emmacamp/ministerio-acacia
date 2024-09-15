import { Heading } from '../../components';

export const SectionEventsOne = () => {
  return (
    <div className='flex h-[386px] items-center justify-center bg-gray-900 bg-[url(/images/img_banner.png)] bg-cover bg-no-repeat py-[138px] md:h-auto md:py-5'>
      <div className='container-xs flex justify-center px-14 md:px-5'>
        <Heading size='heading7' as='h1' className='tracking-[-3.20px]'>
          Conoce Nuestros Eventos
        </Heading>
      </div>
    </div>
  );
};
