import BookModal from '@/components/BookModal';
import { Hero, HomeEvents, Contact, MissionAndVision, Donations } from '@/sections';

export default function HomePage() {
  return (
    <div className='w-full bg-white-a700'>
      <div>
        <Hero />
        <MissionAndVision />
        <HomeEvents />
        <Donations />
        {/* <RedesSection /> */}
        <Contact />
      </div>
      <BookModal />
    </div>
  );
}
