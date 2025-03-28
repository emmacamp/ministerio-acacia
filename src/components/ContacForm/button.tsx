'use client';
import { Loader } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { Button } from '../Button';

export function ContactButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      className='flex h-[54px] flex-row items-center justify-center self-stretch rounded-[26px] bg-blue_gray-700 px-[34px] text-center text-[16px] font-bold text-white-a700 sm:px-5'
      disabled={pending}
    >
      <div className=''>Enviar Mensaje</div>
      {pending && <Loader className='mr-2 h-4 w-4 animate-spin' />}
    </Button>
  );
}
