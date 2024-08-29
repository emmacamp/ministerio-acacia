import { Footer, Header } from '@/components';

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
      <Header />
      <div>
        <SectionInicioOne />
        <SectionInicioTwo />
        <SectionInicioThree />
        <SectionInicioFour />
        <RedesSection />
        <SectionInicioSix />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
