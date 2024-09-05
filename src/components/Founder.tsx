import { Heading, Text } from '@/components';
import Image from 'next/image';
interface Props {
  className?: string;
  userName?: React.ReactNode;
  userDescription?: React.ReactNode;
  src: string;
}

export const Founder = ({
  userName = 'John Carter',
  userDescription = 'Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesu.',
  src,
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col justify-center items-center w-[32%] md:w-full`}
    >
      <Image
        src={src}
        data-aos='fade-up'
        width={350}
        height={462}
        alt='founder image'
        className='h-[462px]  rounded-[20px] object-cover self-center'
      />
      <Heading color='dark' data-aos='fade-up' size='headingxl' as='h1' className='mt-[22px]'>
        {userName}
      </Heading>
      <Text
        data-aos='fade-up'
        size='texts'
        as='p'
        className='mt-2 self-stretch text-center !text-[18px] !font-normal leading-[30px]'
      >
        {userDescription}
      </Text>
    </div>
  );
};
