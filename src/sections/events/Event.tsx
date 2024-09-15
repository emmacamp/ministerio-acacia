import { Heading, Img, Text } from '@/components';
import { Event } from '@/types';

interface EventProps {
  event: Event;
}

export const EventComponent = ({ event }: EventProps) => {
  return (
    <div
      data-aos='fade-up'
      className='flex flex-col w-[48%] items-start justify-center rounded-[20px] bg-gray-900 p-7 md:w-full sm:flex-col sm:p-5'
    >
      <div className='flex flex-1 flex-col items-start self-center sm:self-stretch'>
        <div className='flex  w-full justify-between items-center'>
          <Text color='white' as='p' className='uppercase tracking-[1.80px]'>
            {event.type}
          </Text>
          <div className='flex  h-fit flex-col items-center justify-center rounded-lg bg-white-a700 py-2.5 '>
            <Heading
              size='heading1'
              as='h4'
              className='text-center px-2 uppercase leading-5 tracking-[1.80px] !text-black-900'
            >
              {event.date.from && <span>{event.date.from}-</span>}
              {event.date.to && <span>{event.date.to}</span>}{' '}
              {event.date.month && <span>{event.date.month}</span>}
              {!event.date.from && 'variable'}
            </Heading>
          </div>
        </div>
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
        </div>
      </div>

      {/* <Button
        rightIcon={
          <Img
            src='img_arrowleft.svg'
            width={18}
            height={18}
            alt='Arrow Left'
            className='my-0.5 h-[18px] w-[18px]'
          />
        }
        className='mt-6 flex w-full h-[60px] flex-row items-center justify-center gap-[34px] self-end rounded-lg bg-white-a700 pl-[34px] pr-6 text-center font-dmsans text-[16px] font-bold text-gray-900 md:mr-0 sm:px-5'
      >
        Ir al Evento
      </Button> */}
    </div>
  );
};
