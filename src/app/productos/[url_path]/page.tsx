import { Heading } from '@/components';
import db from '@/public/data/db.json';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return db.products.map((prod) => ({ url_path: prod.url_path.toString() }));
}

export default function ProductDetails({ params }: { params: { url_path: string } }) {
  const product: Product =
    db.products.find((prod) => prod.url_path == params?.url_path) || ({} as Product);

  const number = '8298564016';
  const textMessage = 'Saludos, Me intereza el producto:';

  return (
    <div className='container-xs box-border md:px-5 flex flex-col '>
      <span className='my-7 text-slate-500 flex gap-3 text-md'>
        <Link href='/' className='hover:underline'>
          Acacia
        </Link>{' '}
        <span>&gt;</span>{' '}
        <Link href='/productos/#productos' className='hover:underline'>
          Productos
        </Link>{' '}
        <span>&gt;</span> <span className='text-slate-800'>{product.title}</span>
      </span>
      <div className='flex w-full gap-4 phone-md:flex-col-reverse'>
        <div className='w-[60%] phone-md:w-full box-border gap-3 rounded-md   flex flex-col justify-center items-center'>
          <div data-aos='fade-up' className='bg-gray-200/50 rounded-md overflow-hidden'>
            <Image
              src={product.imgUrl}
              width={800}
              height={400}
              alt={product.description.material}
            />
          </div>
          <div className='flex box-border gap-3 w-full justify-start'>
            {product.variants?.map((variant, i) => (
              <div
                key={i}
                className='bg-gray-200/50 box-border overflow-hidden rounded-md  flex justify-center items-center w-1/3'
              >
                <Image
                  width={300}
                  height={350}
                  src={variant.variant_img}
                  alt='variante del producto'
                  className='object-cover !h-full'
                />
              </div>
            ))}
          </div>{' '}
        </div>{' '}
        <div className='w-[40%] phone-md:w-full flex flex-col gap-5'>
          <div>
            <Heading size='headingxl' color='dark'>
              {product?.title}
            </Heading>
            {/* <span className='text-2xl text-slate-600 hidden'>${product.price}</span> */}
          </div>
          <div className='flex flex-col space-y-4'>
            {product.description.material && (
              <>
                <h3 className='font-bold'>Materiales</h3>
                <p className='text-slate-600'>{product.description.material}</p>
              </>
            )}
            {product.description.design && (
              <>
                <h3 className='font-bold'>Diseño</h3>
                <p className='text-slate-600'>{product.description.design}</p>
              </>
            )}
            {product.description.combination && (
              <>
                <h3 className='font-bold'>Combinacion</h3>
                <p className='text-slate-600'>{product.description.combination}</p>
              </>
            )}
            {product.description.occasion && (
              <>
                <h3 className='font-bold'>Ocasion</h3>
                <p className='text-slate-600'>{product.description.occasion}</p>
              </>
            )}
          </div>
          <Link
            target='_blank'
            href={`https://wa.me/${number}?text=${textMessage} ${product.title}. http://localhost:3000/productos/${product.url_path}`}
            className='bg-gray-900 font-semibold text-xl text-center text-white-a700 rounded-md p-4'
          >
            Mas Información
          </Link>
        </div>
      </div>
    </div>
  );
}
