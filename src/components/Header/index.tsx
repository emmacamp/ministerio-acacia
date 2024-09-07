'use client';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { Img } from '../Img';
import { Button } from '../Button';
import { useRouter } from 'next/navigation';

export const Header = () => {
  // const menuToggleRef = useRef<HTMLButtonElement>(null);
  // const mobileMenuRef = useRef<HTMLDivElement>(null);

  // const toggleMenu = () => {
  //   if (mobileMenuRef.current) {
  //     mobileMenuRef.current.classList.toggle('hidden');
  //   }
  // };

  // const menuToggle = document.getElementById('menu-toggle');
  // const mobileMenu = document.getElementById('mobile-menu');

  // menuToggle?.addEventListener('click', function () {
  //   mobileMenu?.classList.toggle('hidden');
  // });

  return (
    <header
      className='bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow'
      // {...props}
      // className={`${props.className} flex justify-center items-center py-7 sm:py-5 bg-white-a700`}
    >
      <NavBar />

      {/* <div className='container-xs flex items-center justify-between gap-5 md:px-5'>
        <Link href='/'>
          <Img
            src='img_header_logo.png'
            width={62}
            height={62}
            alt='Headerlogo'
            className='h-[62px] w-[62px] object-contain'
          />
        </Link>
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
      )} */}
    </header>
  );
};

const navigation = [
  { name: 'Inicio', href: '/', current: true },
  { name: 'Sobre Nosotros', href: '/sobre-nosotros', current: false },
  { name: 'Servicios', href: '/servicios', current: false },
  { name: 'Eventos', href: '/eventos', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Galeria', href: '/galeria', current: false },
  { name: 'Contacto', href: '/#contacto', current: false },
  { name: 'Productos', href: '/productos', current: false },
];

function NavBar() {
  const router = useRouter();
  return (
    <Disclosure as='nav' className=''>
      <div className='mx-auto max-w-7xl '>
        <div className='relative flex h-16  items-center'>
          <div className='absolute inset-y-0 right-0 items-center  tablet:block hidden'>
            {/* Mobile menu button*/}
            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md mt-4 '>
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon aria-hidden='true' className='block h-6 w-6 group-data-[open]:hidden' />
              <XMarkIcon aria-hidden='true' className='hidden h-6 w-6 group-data-[open]:block' />
            </DisclosureButton>
          </div>
          <div className='flex flex-1 tablet:justify-start justify-between'>
            <Link href='/'>
              <Img
                src='img_header_logo.png'
                width={62}
                height={62}
                alt='Headerlogo'
                className='h-[62px] w-[62px] object-contain'
              />
            </Link>
            <div className='tablet:hidden mt-5 '>
              <div className='flex space-x-8'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={clsx(item.current ? '' : '', '')}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
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
          </div>
        </div>
      </div>

      <DisclosurePanel className='hidden tablet:block '>
        <div className='space-y-1 px-2 pb-3 pt-2 tablet:flex tablet:flex-col tablet:items-center tablet:justify-center'>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={clsx(
                item.current ? '' : '',
                'block rounded-md px-3 py-2 text-base font-medium tablet:w-full tablet:text-center tablet:hover:bg-slate-100'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <DisclosureButton
            as={Link}
            href={'/sembrar'}
            // aria-current={item.current ? 'page' : undefined}
            // className={clsx(
            //   item.current ? '' : '',
            //   'block rounded-md px-3 py-2 text-base font-medium tablet:w-full tablet:text-center tablet:hover:bg-slate-100'
            // )}
            className='hidden  tablet:w-full tablet:flex h-[58px] min-w-[152px] flex-row items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 text-center text-[18px] font-bold text-white-a700 sm:px-5'
          >
            <Img
              src='img_brote_1.png'
              width={22}
              height={22}
              alt='Brote 1'
              className='my-0.5 h-[22px] w-[22px] object-cover'
            />
            Sembrar
          </DisclosureButton>
          {/* <Button
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
            className='hidden  tablet:w-full tablet:flex h-[58px] min-w-[152px] flex-row items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 text-center text-[18px] font-bold text-white-a700 sm:px-5'
          >
            Sembrar
          </Button> */}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
