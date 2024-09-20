import { Text, Heading, Img } from '@/components';
import { Service } from '@/types/service';
import Link from 'next/link';

interface Props extends Service {
  slug: string;
}

export const ServiceCard = ({ slug, title, description, image }: Props) => {
  const maxLength = 144;
  const shortenedDescription =
    description.length > maxLength ? description.substring(0, maxLength) + '...' : description;

  return (
    <Link
      href={`/servicios/${slug}`}
      data-aos='fade-up'
      className='flex flex-col items-center w-[32%] md:w-full'
    >
      <div className='relative h-[462px] content-center self-stretch rounded-[20px]'>
        <Img
          src={image}
          width={388}
          height={462}
          alt={title}
          className='mx-auto h-[462px] w-full flex-1 rounded-[20px] object-cover filter brightness-[0.4]'
        />
        <div className='absolute bottom-[31%] left-0 right-0 m-auto flex flex-1 flex-col items-center gap-2 px-8 sm:px-5'>
          <Heading size='heading3' as='h1' className='!font-dmsans !text-white-a700 text-center'>
            {title}
          </Heading>
          <Text
            size='texts'
            as='p'
            className='self-stretch text-center !font-dmsans leading-[30px] !text-white-a700'
          >
            {shortenedDescription}
          </Text>
        </div>
      </div>
    </Link>
  );
};
