'use client';
import { Heading, Text } from '@/components';
import React from 'react';

interface SeedCardProps {
  className?: string;
  userStatus?: React.ReactNode;
  userPrice?: React.ReactNode;
  handleSeed: () => void;
  isActive: boolean;
}

export const SeedCard = ({
  userStatus = 'Sembrar',
  userPrice = '$10',
  handleSeed,
  isActive,
  ...props
}: SeedCardProps) => {
  return (
    <button
      onClick={handleSeed}
      {...props}
      className={`${props.className} flex flex-col items-end w-[24%] md:w-full pl-14 pr-[62px] gap-5 py-[26px] md:px-5 sm:p-5 border-gray-900 border-[3px] border-solid bg-white-a700  rounded-[14px]`}
      style={{
        borderColor: `${isActive ? 'border-indigo-a200' : ''}`,
      }}
    >
      <Text as='p' className='mt-1.5 !font-inter !text-[20.42px] !font-medium'>
        {userStatus}
      </Text>
      <Heading color='dark' size='headingmd' as='h1' className='!font-inter !text-[49.27px]'>
        {userPrice}
      </Heading>
    </button>
  );
};
