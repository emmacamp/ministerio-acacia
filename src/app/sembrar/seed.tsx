import { Text, Heading } from '@/components';
import { SeedContainer } from '../../components/SeedContainer/index';

export default function Seed() {
  const email = process.env.BUSINESS_EMAIL ?? '';
  return (
    <div className='mt-[54px] flex justify-center' data-aos='fade-up'>
      <div className='container-xs flex justify-center md:px-5'>
        <div className='flex w-full flex-col items-center gap-6 bg-white-a700 p-10 sm:p-5'>
          <div id='seed' className='flex w-[42%] flex-col items-center gap-2 md:w-full'>
            <Heading
              data-aos='fade-up'
              size='headingxl'
              color='dark'
              as='h2'
              className='!font-dmsans'
            >
              Apoya Sembrando
            </Heading>
            <Text
              data-aos='fade-up'
              size='texts'
              as='p'
              className='self-stretch text-center !font-dmsans leading-[30px]'
            >
              Con tu generosidad, podemos continuar extendiendo el amor y la salvación de Cristo.
            </Text>
          </div>
          <SeedContainer email={email} />
        </div>
      </div>
    </div>
  );
}
