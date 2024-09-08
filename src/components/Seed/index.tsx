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
      className={`${props.className ?? ''} flex flex-col justify-center items-center tablet:w-full w-[24%] gap-5 py-[26px] border-gray-900 border-[3px] border-solid  rounded-[14px]  ${isSelected ? '!scale-105 bg-gray-900 text-white-a700' : 'hover:scale-105'} transition-all `}
    >
      {item.editable ? (
        <>
          <Text
            as='p'
            color={isSelected ? 'white' : 'dark'}
            className='mt-1.5 !font-inter !text-[20.42px] !font-medium'
          >
            {item.label}
          </Text>

          <label htmlFor='customValue' className='flex items-center justify-center  pl-6'>
            <span className='!font-inter !text-[49.27px] italic font-semibold'>$</span>
            <input
              id='customValue'
              name='customValue'
              type='number'
              placeholder='0.00'
              // onFocus={e=>}
              value={selected.price}
              defaultValue={1}
              onChange={(e) =>
                handleSetSelected((prev) => {
                  return { ...prev, price: e.target.value };
                })
              }
              className='w-full phone-md:w-[40%] tablet:w-[20%]  !text-[49px] text-center !font-inter !font-semibold overflow-hidden scrollbar-none '
            />
          </label>
        </>
      ) : (
        <>
          <Text
            as='p'
            color={isSelected ? 'white' : 'dark'}
            className='mt-1.5 !font-inter !text-[20.42px] !font-medium'
          >
            {item.label}
          </Text>
          <Heading
            color={isSelected ? 'white' : 'dark'}
            size='headingmd'
            as='h1'
            className='!font-inter !text-[49.27px]'
          >
            {item.price}
          </Heading>
        </>
      )}
    </button>
  );
};
