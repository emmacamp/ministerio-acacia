import { Heading } from '@/components';
import db from '@/public/data/db.json';
import { Product } from '@/types';
import Link from 'next/link';

export async function generateStaticParams() {
  return db.products.map((prod) => ({ url_path: prod.url_path.toString() }));
}

export default function ProductDetails({ params }: { params: { url_path: string } }) {
  const product: Product =
    db.products.find((prod) => prod.url_path == params?.url_path) || ({} as Product);

  const number = '8297721111';
  const textMessage = 'Saludos, Me intereza el producto:';

  return (
    <div className='container-xs box-border md:px-5 flex flex-col '>
      <span className='my-7 text-slate-500 flex gap-3 text-md'>
        <Link href='/' className='hover:underline'>
          Acacia
        </Link>{' '}
        <span>&gt;</span>{' '}
        <Link href='/productos' className='hover:underline'>
          Productos
        </Link>{' '}
        <span>&gt;</span> <span className='text-slate-800'>{product.title}</span>
      </span>
      <div className='flex w-full gap-4 '>
        <div className='w-[60%] box-border gap-3 rounded-md   flex flex-col justify-center items-center'>
          <div className='bg-gray-200/50 rounded-md'>
            <img src={product?.imgUrl} alt='product image' className='w-full' />
          </div>
          <div className='flex box-border gap-3 '>
            {product.variants.map((variant, i) => (
              <div
                key={i}
                className='bg-gray-200/50 box-border rounded-md  flex justify-center items-center w-1/3'
              >
                <img src={variant.variant_img} alt='variant' className='' />
              </div>
            ))}
          </div>{' '}
        </div>{' '}
        <div className='w-[40%] flex flex-col gap-5'>
          <div className=''>
            <Heading size='headingxl' color='dark'>
              {product?.title}
            </Heading>
            <span className='text-2xl text-slate-600'>${product.price}</span>
          </div>
          <p className='text-slate-600 mb-3'>{product.description}</p>
          <Link
            target='_blank'
            href={`https://wa.me/${number}?text=${textMessage} ${product.title}. http://localhost:3000/productos/${product.url_path}`}
            className='bg-gray-900 text-center text-white-a700 rounded-full p-2'
          >
            Mas Información
          </Link>
        </div>
      </div>
    </div>
  );
}
