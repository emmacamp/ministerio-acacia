'use client';
import { useForm, ValidationError } from '@formspree/react';
import { Heading } from '../Heading';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { Button } from '../Button';
import { Text } from '../Text';

export function ContactForm({ className }: { className?: string }) {
  const [state, handleSubmit, reset] = useForm('mvgpllqd');
  if (state.succeeded) {
    alert('Gracias');
    reset();
  }
  return (
    <>
      <div
        data-aos='fade-up'
        className={` absolute self-center tablet:w-[80%] tablet:flex justify-center tablet:relative bottom-0 tablet:right-0 right-[14%] top-0 my-auto flex h-max w-[32%] flex-col tablet:items-center items-start rounded-[20px] bg-white-a700 p-[50px] md:p-5 ${className}`}
      >
        <Heading size='heading6' as='h4' className='!text-[24px] !text-gray-900 md:!text-[22px]'>
          Contactanos
        </Heading>
        <Text as='p'>Nosotros queremos saber de ti</Text>
        <form
          onSubmit={handleSubmit}
          //   action='https://formspree.io/f/mvgpllqd'
          //   method='POST'
          className='mt-[30px] flex flex-col gap-7 self-stretch'
        >
          <div className='flex flex-col  gap-6'>
            <Input
              id='name'
              type='text'
              name='name'
              placeholder={`Nombre`}
              className='flex h-[50px] items-center justify-center rounded-lg bg-blue_gray-700_4c px-6 text-[16px] text-gray-900 sm:px-5'
            />
            <Input
              id='email'
              type='email'
              name='email'
              placeholder={`test@example.com`}
              className='flex h-[50px] items-center justify-center rounded-lg bg-blue_gray-700_4c px-6 text-[16px] text-gray-900 sm:px-5'
            />
            <ValidationError prefix='Email' field='email' errors={state.errors} />
          </div>
          <TextArea
            id='message'
            name='message'
            placeholder={`Por favor escribe tu mensaje aquí...`}
            className='h-[114px] rounded-lg bg-blue_gray-700_4c px-6 py-3 text-[16px] text-gray-900 sm:px-5'
          />
          <ValidationError prefix='Message' field='message' errors={state.errors} />
          <Button
            disabled={state.submitting}
            className='flex h-[54px] flex-row items-center justify-center self-stretch rounded-[26px] bg-blue_gray-700 px-[34px] text-center text-[16px] font-bold text-white-a700 sm:px-5'
          >
            Enviar mensaje
          </Button>
        </form>
      </div>
    </>
  );
}
