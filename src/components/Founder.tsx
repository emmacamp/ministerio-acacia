import { Heading, Text } from '@/components';

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
    <div {...props} className={`${props.className} flex flex-col items-center w-[32%] md:w-full`}>
      <img
        src={src}
        // width={400}
        // height={462}
        className='h-[462px] self-stretch rounded-[20px] bg-teal-100'
      />
      <Heading color='dark' size='headingxl' as='h1' className='mt-[22px]'>
        {userName}
      </Heading>
      <Text
        size='texts'
        as='p'
        className='mt-2 self-stretch text-center !text-[18px] !font-normal leading-[30px]'
      >
        {userDescription}
      </Text>
    </div>
  );
};
