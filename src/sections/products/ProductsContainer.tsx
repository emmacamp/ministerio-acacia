'use client';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { dbStore } from '@/store';
import Image from 'next/image';

export const ProductsContainer = () => {
  const products = dbStore().products;

  return (
    <Suspense fallback={<div>Loading productos...</div>}>
      {products.map((product) => (
        <Link
          key={product.url_path}
          href={`/productos/${product.url_path}`}
          className='w-[350px] h-[400px] phone-md:w-auto rounded-md  border flex flex-col overflow-hidden justify-center items-center hover:scale-105 transition-all '
        >
          <div className='w-full h-[500px] bg-gray-200/50  overflow-hidden'>
            <Image
              alt={product.description.material}
              width={400}
              height={500}
              src={product.imgUrl}
              className='w-full h-full  object-cover'
            />
          </div>

          <div className='px-6 py-4'>
            <h2 className='font-bold text-xl mb-2'>{product.title}</h2>
            <p className='text-gray-700 text-base'>
              {product.description.material.substring(0, 60)}...
            </p>
          </div>
        </Link>
      ))}
    </Suspense>
  );
};
