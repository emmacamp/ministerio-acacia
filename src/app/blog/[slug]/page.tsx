'use client';

import { Button, Footer, Header, Heading, Img, Text } from '@/components/index';

const BlogDetails = () => {
  return (
    <div className='flex w-full flex-col items-center bg-white-a700'>
      <div className='self-stretch'>
        <Header />
      </div>
      <div className='container-xs md:px-5'>
        <div className='flex flex-col items-center bg-white-a700 px-14 md:px-5'>
          <div className='mb-8 flex w-[72%] flex-col gap-7 md:w-full'>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col items-start gap-4'>
                  <Button className='flex h-[32px] min-w-[92px] flex-row items-center justify-center rounded-lg bg-light_blue-700 px-3 text-center font-worksans text-[14px] font-medium text-white-a700'>
                    Adoración{' '}
                  </Button>
                  <Heading size='heading2' color='dark' as='h1' className='w-full leading-10'>
                    Transformando vidas y edificando una comunidad de fe sólida.
                  </Heading>
                </div>
                <div className='flex'>
                  <Text size='textxs' as='p' className='self-end !font-worksans !text-gray-600'>
                    August 20, 2022
                  </Text>
                </div>
              </div>
              <div className='flex flex-col gap-[30px]'>
                <Img
                  src='img_image_15.png'
                  width={800}
                  height={462}
                  alt='Imagefifteen'
                  className='h-[462px] rounded-[24px] object-cover'
                />
                <Text
                  size='textlg'
                  as='p'
                  className='!font-sourceserifpro leading-8 !text-gray-800'
                >
                  <>
                    Traveling is an enriching experience that opens up new horizons, exposes us to
                    different cultures, and creates memories that last a lifetime. However,
                    traveling can also be stressful and overwhelming, especially if you don&#39;t
                    plan and prepare adequately. In this blog article, we&#39;ll explore tips and
                    tricks for a memorable journey and how to make the most of your travels.
                    <br />
                    <br />
                    One of the most rewarding aspects of traveling is immersing yourself in the
                    local culture and customs. This includes trying local cuisine, attending
                    cultural events and festivals, and interacting with locals. Learning a few
                    phrases in the local language can also go a long way in making connections and
                    showing respect.
                  </>
                </Text>
                <div className='flex flex-col items-start gap-3.5'>
                  <Heading as='h2'>Research Your Destination</Heading>
                  <Text
                    size='textlg'
                    as='p'
                    className='w-full !font-sourceserifpro leading-8 !text-gray-800'
                  >
                    <>
                      Before embarking on your journey, take the time to research your destination.
                      This includes understanding the local culture, customs, and laws, as well as
                      identifying top attractions, restaurants, and accommodations. Doing so will
                      help you navigate your destination with confidence and avoid any cultural faux
                      pas.
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum
                      quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec
                      ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam
                      adipiscing vitae. Viverra adipiscing at in tellus.
                    </>
                  </Text>
                </div>
                <div className='flex flex-col items-start gap-2.5'>
                  <Heading as='h3'>Plan Your Itinerary</Heading>
                  <Text
                    size='textlg'
                    as='p'
                    className='w-full !font-sourceserifpro leading-8 !text-gray-800'
                  >
                    <>
                      While it&#39;s essential to leave room for spontaneity and unexpected
                      adventures, having a rough itinerary can help you make the most of your time
                      and budget. Identify the must-see sights and experiences and prioritize them
                      according to your interests and preferences. This will help you avoid
                      overscheduling and ensure that you have time to relax and enjoy your journey.
                      <br />
                      <br />
                      Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus
                      magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt
                      arcu non sodales neque sodales ut etiam sit amet.
                    </>
                  </Text>
                </div>
                <Img
                  src='img_image_22.png'
                  width={800}
                  height={462}
                  alt='Imagetwentytwo'
                  className='h-[462px] rounded-[24px] object-cover'
                />
                <div className='flex flex-col items-start gap-2.5'>
                  <Heading as='h4'>Pack Lightly and Smartly</Heading>
                  <Text
                    size='textlg'
                    as='p'
                    className='w-full !font-sourceserifpro leading-8 !text-gray-800'
                  >
                    Packing can be a daunting task, but with some careful planning and smart
                    choices, you can pack light and efficiently. Start by making a packing list and
                    sticking to it, focusing on versatile and comfortable clothing that can be mixed
                    and matched. Invest in quality luggage and packing organizers to maximize space
                    and minimize wrinkles.
                  </Text>
                </div>
                <div className='flex flex-col items-start gap-2.5'>
                  <Heading as='h5'>Stay Safe and Healthy</Heading>
                  <Text
                    size='textlg'
                    as='p'
                    className='w-full !font-sourceserifpro leading-8 !text-gray-800'
                  >
                    Traveling can expose you to new environments and potential health risks, so
                    it&#39;s crucial to take precautions to stay safe and healthy. This includes
                    researching any required vaccinations or medications, staying hydrated, washing
                    your hands frequently, and using sunscreen and insect repellent. It&#39;s also
                    essential to keep your valuables safe and secure and to be aware of your
                    surroundings at all times.
                  </Text>
                </div>
                <div className='flex flex-col items-start gap-3.5'>
                  <Heading as='h6'>Immerse Yourself in the Local Culture</Heading>
                  <Text
                    size='textlg'
                    as='p'
                    className='w-full !font-sourceserifpro leading-8 !text-gray-800'
                  >
                    One of the most rewarding aspects of traveling is immersing yourself in the
                    local culture and customs. This includes trying local cuisine, attending
                    cultural events and festivals, and interacting with locals. Learning a few
                    phrases in the local language can also go a long way in making connections and
                    showing respect.
                  </Text>
                </div>
                <div className='flex flex-col items-start gap-2.5'>
                  <Heading as='h4'>Capture Memories</Heading>
                  <Text
                    size='textlg'
                    as='p'
                    className='w-full !font-sourceserifpro leading-8 !text-gray-800'
                  >
                    Finally, don&#39;t forget to capture memories of your journey. Whether it&#39;s
                    through photographs, journaling, or souvenirs, preserving the moments and
                    experiences of your travels can bring joy and nostalgia for years to come.
                    However, it&#39;s also essential to be present in the moment and not let
                    technology distract you from the beauty of your surroundings.
                  </Text>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start gap-3.5'>
              <Heading as='h4'>Conclusion:</Heading>
              <Text
                size='textlg'
                as='p'
                className='w-full !font-sourceserifpro leading-8 !text-gray-800'
              >
                Traveling is an art form that requires a blend of planning, preparation, and
                spontaneity. By following these tips and tricks, you can make the most of your
                journey and create memories that last a lifetime. So pack your bags, embrace the
                adventure, and enjoy the ride.
              </Text>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default BlogDetails;
