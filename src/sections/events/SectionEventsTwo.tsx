import { dbStore } from '@/store';
import { Button, Img, Text, Heading } from '../../components';

export const SectionEventsTwo = () => {
  const { events } = dbStore();
  return (
    <div className='mt-[76px] flex flex-col items-center'>
      <div className='container-xs md:px-5'>
        <div className='flex flex-col items-center gap-[76px] md:gap-[57px] sm:gap-[38px]'>
          <div className='flex justify-between gap-5 self-stretch md:flex-col flex-wrap gap-y-[38px]'>
            {events.map((event, i) => (
              <div
                key={`event-${i}`}
                className='flex w-[48%] items-start justify-center rounded-[20px] bg-gray-900 p-7 md:w-full sm:flex-col sm:p-5'
              >
                <div className='mt-3 flex flex-1 flex-col items-start self-center sm:self-stretch'>
                  <Text color='white' as='p' className='uppercase tracking-[1.80px]'>
                    {event.type}
                  </Text>
                  <Heading size='heading4' as='h2' className='mt-2.5 leading-[50px]'>
                    <>{event.title}</>
                  </Heading>
                  <div className='mt-3.5 flex items-center self-stretch'>
                    <Img
                      src='img_image_5.png'
                      width={22}
                      height={22}
                      alt='Imagefive'
                      className='h-[22px] w-[22px] object-cover'
                    />
                    <Text color='white' as='p'>
                      {event.location}
                    </Text>
                  </div>
                  <div className='ml-1.5 mt-9 flex flex-col items-start self-stretch md:ml-0'>
                    <Heading as='h3' className='!text-[15px] !font-normal tracking-[1.50px]'>
                      {event.willDo}
                    </Heading>
                    <Text color='white' as='p' className='mt-3 w-full leading-9 tracking-[3.06px]'>
                      {event.description}
                    </Text>
                    <Button
                      rightIcon={
                        <Img
                          src='img_arrowleft.svg'
                          width={18}
                          height={18}
                          alt='Arrow Left'
                          className='my-0.5 h-[18px] w-[18px]'
                        />
                      }
                      className='mr-[78px] mt-6 flex h-[60px] min-w-[250px] flex-row items-center justify-center gap-[34px] self-end rounded-lg bg-white-a700 pl-[34px] pr-6 text-center font-dmsans text-[16px] font-bold text-gray-900 md:mr-0 sm:px-5'
                    >
                      Ir al Evento
                    </Button>
                  </div>
                </div>
                <div className='flex w-[10%] flex-col items-center justify-center rounded-lg bg-white-a700 py-2.5 sm:w-full sm:px-5'>
                  <Heading
                    size='heading1'
                    as='h4'
                    className='text-center uppercase leading-5 tracking-[1.80px] !text-black-900'
                  >
                    <>
                      25
                      <br />
                      MAY
                    </>
                  </Heading>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
