'use client';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { Heading, Text } from '../../components';
import { Typewriter } from 'react-simple-typewriter';

const BookModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showModal) return null;

  return ReactDOM.createPortal(
    <div className='fixed inset-x-0 top-0 h-screen w-screen bg-black-900 bg-opacity-70 flex items-center justify-center z-50'>
      <div
        className='fixed inset-x-0 top-0 w-screen bg-[#AC001F] tablet:gap-4 tablet:!h-[450px] flex justify-center items-center text-white-a700'
        style={{ height: '200px' }}
      >
        <div className='mx-auto flex container-xs '>
          <button
            onClick={() => setShowModal(false)}
            className='absolute top-4 right-4 text-white-a700 text-xl font-bold'
          >
            &times;
          </button>
          <div className='flex items-center justify-around w-full h-full tablet:flex-col'>
            {/* Image Section */}
            <div className='bg-red-950/40 tablet:mb-4 rounded-full w-[167px] h-[167px] flex  items-center justify-center '>
              <Image
                src='/images/3d-acacia-book.png'
                alt='Portada del libro Mas Que Vencedores'
                width={100}
                height={100}
                className='w-[75%] ms-5 max-w-xs phone-md:max-w-md '
              />
            </div>

            <div className='w-[80%]  tablet:flex-col gap-4  flex  justify-between items-center text-center '>
              {/* Text Section */}
              <div className='text-start tablet:text-center '>
                <Heading className='text-5xl !font-worksans phone-md:text-[40px] tracking-[-0.90px]'>
                  MAS QUE <Typewriter words={['VENCEDORES']} cursor={false} loop />
                </Heading>
                <Text
                  color='white'
                  className='text-lg  !font-worksans mb-6 uppercase font-semibold tracking-[2px]'
                >
                  Rompiendo barreras
                </Text>
              </div>

              {/* CTA Button */}
              <Link
                href='/productos'
                className='bg-white-a700 text-black-900 w-80 text-xl text-center text-white py-3 px-8 rounded-full shadow-lg transition duration-300 animate-[bounce_3s_ease-in_infinite]'
              >
                ¡Cómpralo hoy!
              </Link>
            </div>
          </div>{' '}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BookModal;
