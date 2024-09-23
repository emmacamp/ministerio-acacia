'use client'; // Esto indica que es un componente del lado del cliente

import Link from 'next/link';
import { useEffect, useState } from 'react';

export const MoreProductInfoButton = ({ product, number, textMessage }: any) => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href); // Captura la URL completa en el cliente
  }, []);

  return (
    <Link
      target='_blank'
      href={`https://wa.me/${number}?text=${textMessage} ${product.title}. ${currentUrl}`}
      className='bg-gray-900 font-semibold text-xl text-center text-white-a700 rounded-md p-4'
    >
      Más Información
    </Link>
  );
};
