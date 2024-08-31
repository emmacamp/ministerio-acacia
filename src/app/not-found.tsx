import { Img } from '@/components';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      data-aos='fade-up'
      className='flex flex-col gap-11 bg-white-a700 w-full justify-center items-center'
    >
      <Img src='not-found.png' alt='Not Found Image' width={500} height={500} />
      <h1 className='text-2xl'>No se encontró el recurso</h1>
      <Link href='/' className='bg-slate-200 p-4 rounded-sm hover:bg-slate-300 transition'>
        Regresar al inicio
      </Link>
    </div>
  );
}
