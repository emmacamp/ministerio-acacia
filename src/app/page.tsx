'use client';

import { Footer, Header } from '@/components/index';

import {
  SectionInicioFour,
  SectionInicioFive,
  SectionInicioThree,
  SectionInicioSix,
  SectionInicioOne,
  SectionInicioTwo,
} from '@/sections/index';

const HomePage = () => {
  return (
    <div className='w-full bg-white-a700'>
      <Header />
      <div>
        <SectionInicioOne />
        <SectionInicioTwo />
        <SectionInicioThree />
        <SectionInicioFour />
        <SectionInicioFive />
        <SectionInicioSix />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
