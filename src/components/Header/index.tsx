import Link from 'next/link';

import { Button } from '../Button';
import { Img } from '../Img';
import { Text } from '../Text';

interface Props {
  className?: string;
}

export const Header = ({ ...props }: Props) => {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center py-7 sm:py-5 bg-white-a700`}
    >
      <div className='container-xs flex items-center justify-between gap-5 md:flex-col md:px-5'>
        <Img
          src='img_header_logo.png'
          width={62}
          height={62}
          alt='Headerlogo'
          className='h-[62px] w-[62px] object-contain'
        />
        <ul className='flex flex-wrap gap-8'>
          <li>
            <Link href='/'>
              <Text as='p' className='!text-black-900'>
                Inicio
              </Text>
            </Link>
          </li>
          <li>
            <Link href='/sobre-nosotros'>
              <Text as='p' className='!text-black-900'>
                Sobre Nosotros
              </Text>
            </Link>
          </li>
          <li>
            <Link href='/servicios'>
              <Text as='p' className='!text-black-900'>
                Servicios
              </Text>
            </Link>
          </li>
          <li>
            <Link href='/eventos'>
              <Text as='p' className='!text-black-900'>
                Eventos
              </Text>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <Text as='p' className='!text-black-900'>
                Blog
              </Text>
            </Link>
          </li>
          <li>
            <Link href='/galeria'>
              <Text as='p' className='!text-black-900'>
                Galería
              </Text>
            </Link>
          </li>
          <li>
            <Link href='/contacto'>
              <Text as='p' className='!text-black-900'>
                Contacto
              </Text>
            </Link>
          </li>
          <li>
            <Link href='/productos'>
              <Text as='p' className='!text-black-900'>
                Productos
              </Text>
            </Link>
          </li>
        </ul>
        <Button
          leftIcon={
            <Img
              src='img_brote_1.png'
              width={22}
              height={22}
              alt='Brote 1'
              className='my-0.5 h-[22px] w-[22px] object-cover'
            />
          }
          className='flex h-[58px] min-w-[152px] flex-row items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 text-center text-[18px] font-bold text-white-a700 sm:px-5'
        >
          Sembrar
        </Button>
      </div>
    </header>
  );
};
