'use client';
import Link from 'next/link';
import { Button } from '../Button';
import { Img } from '../Img';
import { Text } from '../Text';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
  className?: string;
}

export const Header = ({ ...props }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center py-7 sm:py-5 bg-white-a700`}
    >
      <div className='container-xs flex items-center justify-between gap-5 md:px-5'>
        <Img
          src='img_header_logo.png'
          width={62}
          height={62}
          alt='Headerlogo'
          className='h-[62px] w-[62px] object-contain'
        />
        <ul className='flex gap-4 tablet:hidden'>
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
          onClick={() => router.push('/sembrar')}
          leftIcon={
            <Img
              src='img_brote_1.png'
              width={22}
              height={22}
              alt='Brote 1'
              className='my-0.5 h-[22px] w-[22px] object-cover'
            />
          }
          className='hidden smflex h-[58px] min-w-[152px] flex-row items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 text-center text-[18px] font-bold text-white-a700 sm:px-5'
        >
          Sembrar
        </Button>
        <Button
          onClick={() => router.push('/sembrar')}
          leftIcon={
            <Img
              src='img_brote_1.png'
              width={22}
              height={22}
              alt='Brote 1'
              className='my-0.5 h-[22px] w-[22px] object-cover'
            />
          }
          className='tablet:hidden flex h-[58px] min-w-[152px] flex-row items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 text-center text-[18px] font-bold text-white-a700 sm:px-5'
        >
          Sembrar
        </Button>
        <Button className='hidden tablet:block' onClick={toggleMenu}>
          <svg
            width='30'
            height='30'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-menu-2'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M4 6l16 0' />
            <path d='M4 12l16 0' />
            <path d='M4 18l16 0' />
          </svg>
        </Button>
      </div>

      {menuOpen && (
        <div className='phone-md:hidden flex flex-col items-center justify-center bg-white py-5'>
          <ul className='flex flex-col items-center gap-5'>
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
        </div>
      )}
    </header>
  );
};
