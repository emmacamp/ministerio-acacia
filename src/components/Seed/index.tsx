'use client';
import { Heading, SeedData, Text } from '@/components';
import { Dispatch, SetStateAction } from 'react';

interface SeedCardProps {
  className?: string;
  isSelected: boolean;
  selected: SeedData;
  item: SeedData;
  handleSetSelected: Dispatch<SetStateAction<SeedData>>;
}

export const SeedCard = ({
  handleSetSelected,
  selected,
  isSelected,
  item,
  ...props
}: SeedCardProps) => {
  return (
    <button
      onClick={() => {
        handleSetSelected(item);
      }}
      {...props}
      className={`${props.className ?? ''} flex flex-col justify-center items-center w-[24%] gap-5 py-[26px] border-gray-900 border-[3px] border-solid bg-white-a700  rounded-[14px]  ${isSelected ? '!scale-110' : 'hover:scale-105'} transition-all `}
    >
      {item.editable ? (
        <>
          <Text as='p' className='mt-1.5 !font-inter !text-[20.42px] !font-medium'>
            {item.label}
          </Text>

          <label className='flex items-center justify-center  pl-6'>
            <span className='!font-inter !text-[49.27px] italic font-semibold'>$</span>
            <input
              type='number'
              value={selected.price}
              onChange={(e) =>
                handleSetSelected((prev) => {
                  return { ...prev, price: e.target.value };
                })
              }
              className='w-full !text-[49px] text-center !font-inter !font-semibold'
            />
          </label>
        </>
      ) : (
        <>
          <Text as='p' className='mt-1.5 !font-inter !text-[20.42px] !font-medium'>
            {item.label}
          </Text>
          <Heading color='dark' size='headingmd' as='h1' className='!font-inter !text-[49.27px]'>
            {item.price}
          </Heading>
        </>
      )}
    </button>
  );
};
