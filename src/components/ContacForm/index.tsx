'use client';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

import { Heading } from '../Heading';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { Text } from '../Text';
import { ContactButton } from './button';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const ref = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        toast.error('Error al enviar el mensaje, por favor intenta de nuevo más tarde');
        return;
      }

      toast.success('Mensaje enviado con éxito');
    } catch (error) {
      toast.error('Error al enviar el mensaje, por favor intenta de nuevo más tarde');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div data-aos='fade-up' className={` ${className}`}>
        <Heading size='heading6' as='h4' className='!text-[24px] !text-gray-900 md:!text-[22px]'>
          Contactanos
        </Heading>
        <Text as='p'>Queremos orar por ti</Text>
        <form ref={ref} onSubmit={onSubmit} className='mt-[30px] flex flex-col gap-7 self-stretch'>
          <div className='flex flex-col  gap-6'>
            <Input
              id='name'
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              required
              placeholder={`Nombre`}
              className='flex h-[50px] items-center justify-center rounded-lg bg-blue_gray-700_4c px-6 text-[16px] text-gray-900 sm:px-5'
            />
            <Input
              id='email'
              type='email'
              name='email'
              onChange={handleChange}
              value={form.email}
              required
              placeholder={`email@example.com`}
              className='flex h-[50px] items-center justify-center rounded-lg bg-blue_gray-700_4c px-6 text-[16px] text-gray-900 sm:px-5'
            />
          </div>
          <TextArea
            id='message'
            name='message'
            required
            value={form.message}
            onChange={(value) => setForm({ ...form, message: value as string })}
            placeholder={`Por favor escribe tu mensaje aquí...`}
            className='h-[114px] rounded-lg bg-blue_gray-700_4c px-6 py-3 text-[16px] text-gray-900 sm:px-5'
          />
          <ContactButton isLoading={isLoading} />
        </form>
      </div>
    </>
  );
}
