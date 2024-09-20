import Link from 'next/link';
import { Text, Heading, Button, Img } from './..';
import React from 'react';

interface Props {
  className?: string;
  userImage?: string;
  buttonLabel?: string;
  url: string;
  titleText?: React.ReactNode;
  dateText?: React.ReactNode;
}

export const UserProfile = ({
  userImage,
  buttonLabel,
  titleText,
  dateText,
  url,
  className,
}: Props) => {
  return (
    <Link data-aos='fade-up' href={`/blog/${url}`}>
      <div
        className={`${className} flex flex-col items-center w-full gap-4 p-4 border-gray-200 border border-solid bg-white-a700 rounded-[24px]`}
      >
        <Img
          src={userImage}
          width={360}
          height={240}
          priority
          alt={titleText?.toString()}
          className='h-[240px] w-full rounded-[24px] object-cover'
        />
        <div className='flex flex-col gap-5 self-stretch p-2'>
          <div className='flex flex-col items-start gap-4'>
            <Button className='flex h-[28px] min-w-[88px] flex-row items-center justify-center rounded-md bg-indigo-a200_0c px-2.5 text-center font-worksans text-[14px] font-medium text-indigo-a200'>
              {buttonLabel}
            </Button>
            <Heading
              size='heading3'
              as='h4'
              className='w-full !font-worksans leading-7 !text-gray-900_01'
            >
              {titleText}
            </Heading>
          </div>
          <div className='flex'>
            <Text as='p' className='!font-worksans !text-gray-500'>
              {dateText}
            </Text>
          </div>
        </div>
      </div>
    </Link>
  );
};
