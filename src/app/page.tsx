import {
  SectionInicioFour,
  RedesSection,
  SectionInicioThree,
  SectionInicioSix,
  SectionInicioOne,
  SectionInicioTwo,
} from '@/sections';

const HomePage = () => {
  return (
    <div className='w-full bg-white-a700'>
      <div>
        <SectionInicioOne />
        <SectionInicioTwo />
        <SectionInicioThree />
        <SectionInicioFour />
        <RedesSection />
        <SectionInicioSix />
      </div>
    </div>
  );
};

export default HomePage;
