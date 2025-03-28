'use client';
import { useRef } from 'react';
import { toast } from 'sonner';

import { Heading } from '../Heading';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { Text } from '../Text';
import { ContactButton } from './button';

interface ContactFormProps {
  handleContactForm: (formData: FormData) => void;
  className?: string;
}

export function ContactForm({ handleContactForm, className }: ContactFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <>
      <div data-aos='fade-up' className={` ${className}`}>
        <Heading size='heading6' as='h4' className='!text-[24px] !text-gray-900 md:!text-[22px]'>
          Contactanos
        </Heading>
        <Text as='p'>Queremos orar por ti</Text>
        <form
          ref={ref}
          action={async (e: FormData) => {
            try {
              await handleContactForm(e);
              ref.current?.reset();
              toast.success('Mensaje enviado correctamente');
            } catch (error) {
              toast.error('Error al enviar el mensaje. Inténtalo de nuevo');
            }
          }}
          className='mt-[30px] flex flex-col gap-7 self-stretch'
        >
          <div className='flex flex-col  gap-6'>
            <Input
              id='name'
              type='text'
              name='name'
              required
              placeholder={`Nombre`}
              className='flex h-[50px] items-center justify-center rounded-lg bg-blue_gray-700_4c px-6 text-[16px] text-gray-900 sm:px-5'
            />
            <Input
              id='email'
              type='email'
              name='email'
              required
              placeholder={`test@example.com`}
              className='flex h-[50px] items-center justify-center rounded-lg bg-blue_gray-700_4c px-6 text-[16px] text-gray-900 sm:px-5'
            />
          </div>
          <TextArea
            id='message'
            name='message'
            required
            placeholder={`Por favor escribe tu mensaje aquí...`}
            className='h-[114px] rounded-lg bg-blue_gray-700_4c px-6 py-3 text-[16px] text-gray-900 sm:px-5'
          />
          <ContactButton />
        </form>
      </div>
    </>
  );
}
