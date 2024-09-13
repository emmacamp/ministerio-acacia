'use client';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { Img } from '../Img';
import { Button } from '../Button';
import { usePathname, useRouter } from 'next/navigation';
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
export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header
      className={` px-4 py-4 ${pathname === '/productos' ? 'text-white-a700 bg-black-900 m-0 p-0 ' : ''}`}
    >
      <Disclosure as='nav'>
        <div className={`mx-auto max-w-7xl px-4 `}>
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
                  className={`h-[62px] w-[62px] object-contain filter invert brightness-[10] ${pathname === '/productos' ? 'filter invert !brightness-0' : ''}`}
                />
              </Link>
              <div className='tablet:hidden mt-5 '>
                <div className='flex space-x-8'>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.href === pathname ? 'page' : undefined}
                      className={clsx(item.href === pathname ? 'font-bold' : '', '')}
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
                    className={`my-0.5 h-[22px] w-[22px] object-cover  ${pathname === '/productos' ? 'invert' : ''}`}
                  />
                }
                className={`tablet:hidden flex h-[58px] min-w-[152px] flex-row items-center justify-center gap-2 rounded-lg  px-6 text-center text-[18px] font-bold sm:px-5 bg-gray-900  ${pathname === '/productos' ? 'bg-white-a700 text-black-900' : 'text-white-a700 '}`}
              >
                Sembrar
              </Button>
            </div>
          </div>
        </div>

        {/* mobile */}
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
                  'block rounded-md px-3 py-2 text-base font-medium tablet:w-full tablet:text-center tablet:hover:bg-slate-300/20'
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
              className={` ${pathname === '/productos' ? 'bg-white-a700 text-black-900' : 'text-white-a700 '} hidden  tablet:w-full tablet:flex h-[58px] min-w-[152px] flex-row items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 text-center text-[18px] font-bold sm:px-5`}
            >
              <Img
                src='img_brote_1.png'
                width={22}
                height={22}
                alt='Seed'
                className={`my-0.5 h-[22px] w-[22px] object-cover  ${pathname === '/productos' ? 'invert' : ''} `}
              />
              Sembrar
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </header>
  );
};
