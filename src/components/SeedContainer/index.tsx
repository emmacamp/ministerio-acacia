'use client';
import { NumberUtils } from '@/utils';
import { Suspense, useState } from 'react';
import { SeedCard } from '../Seed';
import { Button } from '../Button';
import { Img } from '../Img';
import clsx from 'clsx';

type SeedCardProps = {
  email?: string;
};
export type SeedData = {
  id: number;
  label: string;
  price: string;
  editable?: boolean;
};

const data: SeedData[] = [
  { id: 1, label: 'Sembrar', price: '$10' },
  { id: 2, label: 'Sembrar', price: '$15' },
  { id: 3, label: 'Sembrar', price: '$20' },
  { id: 4, label: 'Personalizar', price: '$0.00', editable: true },
];

export const SeedContainer = ({ email }: SeedCardProps) => {
  const [selected, setSelected] = useState<SeedData>(data[0]);

  const handleClick = () => {
    if (+NumberUtils.getOnlyNumbers(selected.price) === 0) return;
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${encodeURIComponent(email ?? '')}&item_name=${selected.label}&amount=${NumberUtils.getOnlyNumbers(selected.price)}&currency_code=USD`;
    window.open(paypalUrl, '_blank');
  };

  return (
    <>
      <div className='mb-[34px] w-[84%] flex flex-wrap tablet:flex-col columns-4 justify-center items-center gap-3 h-auto'>
        <Suspense fallback={<div>Loading feed...</div>}>
          {data.map((d, index) => (
            <SeedCard
              item={d}
              isSelected={selected.id === d.id}
              selected={selected}
              handleSetSelected={setSelected}
              className={clsx('', {
                '': selected.id === d.id,
              })}
              key={'modulosembrar' + index}
            />
          ))}
        </Suspense>
      </div>
      <div className='space-y-1 px-2 pb-3 pt-2 tablet:flex tablet:flex-col tablet:items-center tablet:justify-center'>
        <Button
          onClick={() => handleClick()}
          leftIcon={
            <Img
              src='img_brote_1.png'
              width={22}
              height={22}
              alt='Brote 1'
              className='my-0.5 h-[22px] w-[22px] object-cover'
            />
          }
          className='flex h-[58px] min-w-[152px] flex-row items-center justify-center gap-2 rounded-lg bg-gray-900 animate-[bounce_3s_ease-in-out_infinite] px-6 text-center text-[18px] font-bold text-white-a700 sm:px-5'
        >
          Sembrar
        </Button>
      </div>
    </>
  );
};
