import { Text, Heading, SeedCard } from '@/components';
import { Suspense } from 'react';

const data = [
  { userStatus: 'Sembrar', userPrice: '$10' },
  { userStatus: 'Sembrar', userPrice: '$15' },
  { userStatus: 'Sembrar', userPrice: '$20' },
  { userStatus: 'Personalizar', userPrice: '$0.00' },
];

export default function Seed() {
  return (
    <div className='mt-[54px] flex justify-center'>
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
          <div className='mb-[34px] flex w-[84%] gap-7 md:w-full md:flex-col'>
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <SeedCard {...d} key={'modulosembrar' + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
