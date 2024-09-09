import { Button } from '../Button';
import { Heading } from '../Heading';
import { Img } from '../Img';
import { Text } from '../Text';

interface Props {
  className?: string;
  activitySubtitle?: React.ReactNode;
  eventTitle?: React.ReactNode;
  locationSubtitle?: React.ReactNode;
  whatToDoSubtitle?: React.ReactNode;
  eventDescription?: React.ReactNode;
  eventButton?: string;
  eventDate?: React.ReactNode;
}

export const EventDetails = ({
  activitySubtitle = 'Actividad',
  eventTitle = (
    <>
      Pinta caritas <br />y Algodón
    </>
  ),
  locationSubtitle = 'Los Alcarrizos, Santo Domingo',
  whatToDoSubtitle = 'Que haremos?',
  eventDescription = 'Estaremos llevando pinta caritas , juegos inflables , máquinas de palomitas y algodón a todos los niños de esta gran comunidad',
  eventButton = 'Ir al Evento',
  eventDate = (
    <>
      25
      <br />
      MAY
    </>
  ),
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[50%] md:w-full p-7 sm:p-5 rounded-[20px]`}
    >
      <div className='mt-3 flex flex-1 items-start  '>
        <div className='text-start'>
          <Text
            as='p'
            className='!font-inter uppercase tracking-[1.80px] !text-white-a700 sm:text-[15px]'
          >
            {activitySubtitle}
          </Text>
          <Heading size='heading4' as='h1' className='mt-2.5 leading-[50px] sm:text-[37px]'>
            {eventTitle}
          </Heading>
          <div className='mt-3.5 flex items-center self-stretch'>
            <Img
              src='img_image_5.png'
              width={22}
              height={22}
              alt='Image'
              className='h-[22px] w-[22px] object-cover'
            />
            <Text as='p' className='!font-inter !text-white-a700 sm:text-[15px]'>
              {locationSubtitle}
            </Text>
          </div>
          <div className='ml-1.5 mt-9 flex flex-col items-start gap-3 self-stretch sm:ml-0 sm:gap-3'>
            <Text
              size='textxs'
              as='p'
              className='text-start !font-inter tracking-[1.50px] !text-white-a700'
            >
              {whatToDoSubtitle}
            </Text>
            <Text
              as='p'
              className='w-full !font-inter leading-9 tracking-[3.06px] !text-white-a700 sm:w-full sm:text-[15px]'
            >
              {eventDescription}
            </Text>
          </div>
        </div>
        <Heading
          as='h6'
          className='flex w-[150px] flex-col items-center justify-center rounded-lg bg-white-a700 py-2.5 text-center uppercase leading-5 tracking-[1.80px] !text-black-900 '
        >
          {eventDate}
        </Heading>
      </div>
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
        className='w-full mt-6 flex h-[60px] min-w-[250px] flex-row items-center justify-center gap-[34px] rounded-lg bg-white-a700 pl-[34px] pr-6 text-center text-[16px] font-bold text-gray-900 sm:mr-0 sm:px-5 sm:text-[13px]'
      >
        {eventButton}
      </Button>
    </div>
  );
};
