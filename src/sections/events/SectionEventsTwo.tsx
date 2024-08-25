import { Button, Img, Text, Heading } from '../../components';

export const SectionEventsTwo = () => {
  return (
    <div className='mt-[76px] flex flex-col items-center'>
      <div className='container-xs md:px-5'>
        <div className='flex flex-col items-center gap-[76px] md:gap-[57px] sm:gap-[38px]'>
          <div className='flex justify-between gap-5 self-stretch md:flex-col'>
            <div className='flex w-[48%] items-start justify-center rounded-[20px] bg-gray-900 p-7 md:w-full sm:flex-col sm:p-5'>
              <div className='mt-3 flex flex-1 flex-col items-start self-center sm:self-stretch'>
                <Text color='white' as='p' className='uppercase tracking-[1.80px]'>
                  Actividad
                </Text>
                <Heading size='heading4' as='h2' className='mt-2.5 leading-[50px]'>
                  <>
                    Pinta caritas <br />y Algodon
                  </>
                </Heading>
                <div className='mt-3.5 flex items-center self-stretch'>
                  <Img
                    src='img_image_5.png'
                    width={22}
                    height={22}
                    alt='Imagefive'
                    className='h-[22px] w-[22px] object-cover'
                  />
                  <Text color='white' as='p'>
                    Los Alcarrizos, Santo Domingo
                  </Text>
                </div>
                <div className='ml-1.5 mt-9 flex flex-col items-start self-stretch md:ml-0'>
                  <Heading as='h3' className='!text-[15px] !font-normal tracking-[1.50px]'>
                    Que haremos?
                  </Heading>
                  <Text color='white' as='p' className='mt-3 w-full leading-9 tracking-[3.06px]'>
                    Estaremos llevando pinta caritas , juegos inflables , máquinas de palomitas y
                    algodón a todos los niños de esta gran comunidad
                  </Text>
                  <Button
                    rightIcon={
                      <Img
                        src='img_arrowleft.svg'
                        width={18}
                        height={18}
                        alt='Arrow Left'
                        className='my-0.5 h-[18px] w-[18px]'
                      />
                    }
                    className='mr-[78px] mt-6 flex h-[60px] min-w-[250px] flex-row items-center justify-center gap-[34px] self-end rounded-lg bg-white-a700 pl-[34px] pr-6 text-center font-dmsans text-[16px] font-bold text-gray-900 md:mr-0 sm:px-5'
                  >
                    Ir al Evento
                  </Button>
                </div>
              </div>
              <div className='flex w-[10%] flex-col items-center justify-center rounded-lg bg-white-a700 py-2.5 sm:w-full sm:px-5'>
                <Heading
                  size='heading1'
                  as='h4'
                  className='text-center uppercase leading-5 tracking-[1.80px] !text-black-900'
                >
                  <>
                    25
                    <br />
                    MAY
                  </>
                </Heading>
              </div>
            </div>
            <div className='flex w-[48%] flex-col items-end justify-center rounded-[20px] bg-blue_gray-700 px-[30px] py-7 md:w-full sm:p-5'>
              <div className='flex items-start justify-end gap-1 self-stretch sm:flex-col'>
                <div className='mt-2.5 flex flex-1 flex-col items-start gap-2.5 self-end sm:self-stretch'>
                  <Text color='white' as='p' className='uppercase tracking-[1.80px]'>
                    Actividad
                  </Text>
                  <Heading size='heading4' as='h5' className='w-full leading-[50px]'>
                    Jornada de Donación de Alimentos
                  </Heading>
                </div>
                <div className='flex w-[10%] flex-col items-center justify-center rounded-lg bg-white-a700 py-2.5 sm:w-full'>
                  <Heading
                    size='heading1'
                    as='h6'
                    className='text-center uppercase leading-5 tracking-[1.80px] !text-black-900'
                  >
                    <>
                      18
                      <br />
                      MAY
                    </>
                  </Heading>
                </div>
              </div>
              <div className='mt-2 flex items-center self-stretch'>
                <Img
                  src='img_image_5.png'
                  width={22}
                  height={22}
                  alt='Imagefive'
                  className='h-[22px] w-[22px] object-cover'
                />
                <Text color='white' as='p'>
                  Santo Domingo
                </Text>
              </div>
              <div className='ml-1.5 mt-[22px] flex flex-col items-start self-stretch md:ml-0'>
                <Heading as='p' className='!text-[15px] !font-normal tracking-[1.50px]'>
                  Que haremos?
                </Heading>
                <Text color='white' as='p' className='w-full leading-9 tracking-[3.06px]'>
                  Por cada comentario en Instagram donaremos una comida a una familia necesitada.
                  Únete a nuestro equipo acacia como voluntario y lleva ayuda directamente a quien
                  la necesite !!
                </Text>
              </div>
              <Button
                rightIcon={
                  <Img
                    src='img_arrowleft.svg'
                    width={18}
                    height={18}
                    alt='Arrow Left'
                    className='my-0.5 h-[18px] w-[18px]'
                  />
                }
                className='mr-[116px] mt-1 flex h-[60px] min-w-[250px] flex-row items-center justify-center gap-[34px] rounded-lg bg-white-a700 pl-[34px] pr-6 text-center font-dmsans text-[16px] font-bold text-gray-900 md:mr-0 sm:px-5'
              >
                Ir al Evento
              </Button>
            </div>
          </div>
          <div className='flex justify-between gap-5 self-stretch md:flex-col'>
            <div className='flex w-[48%] flex-col items-end justify-center rounded-[20px] bg-blue_gray-700 px-[30px] py-7 md:w-full sm:p-5'>
              <div className='flex items-start justify-end gap-1 self-stretch sm:flex-col'>
                <div className='mt-2.5 flex flex-1 flex-col items-start gap-2.5 self-end sm:self-stretch'>
                  <Text color='white' as='p' className='uppercase tracking-[1.80px]'>
                    Actividad
                  </Text>
                  <Heading size='heading4' as='h1' className='w-full leading-[50px]'>
                    Jornada de Donación de Alimentos
                  </Heading>
                </div>
                <div className='flex w-[10%] flex-col items-center justify-center rounded-lg bg-white-a700 py-2.5 sm:w-full'>
                  <Heading
                    size='heading1'
                    as='h6'
                    className='text-center uppercase leading-5 tracking-[1.80px] !text-black-900'
                  >
                    <>
                      18
                      <br />
                      MAY
                    </>
                  </Heading>
                </div>
              </div>
              <div className='mt-2 flex items-center self-stretch'>
                <Img
                  src='img_image_5.png'
                  width={22}
                  height={22}
                  alt='Imagefive'
                  className='h-[22px] w-[22px] object-cover'
                />
                <Text color='white' as='p'>
                  Santo Domingo
                </Text>
              </div>
              <div className='ml-1.5 mt-[22px] flex flex-col items-start self-stretch md:ml-0'>
                <Heading as='p' className='!text-[15px] !font-normal tracking-[1.50px]'>
                  Que haremos?
                </Heading>
                <Text color='white' as='p' className='w-full leading-9 tracking-[3.06px]'>
                  Por cada comentario en Instagram donaremos una comida a una familia necesitada.
                  Únete a nuestro equipo acacia como voluntario y lleva ayuda directamente a quien
                  la necesite !!
                </Text>
              </div>
              <Button
                rightIcon={
                  <Img
                    src='img_arrowleft.svg'
                    width={18}
                    height={18}
                    alt='Arrow Left'
                    className='my-0.5 h-[18px] w-[18px]'
                  />
                }
                className='mr-[116px] mt-1 flex h-[60px] min-w-[250px] flex-row items-center justify-center gap-[34px] rounded-lg bg-white-a700 pl-[34px] pr-6 text-center font-dmsans text-[16px] font-bold text-gray-900 md:mr-0 sm:px-5'
              >
                Ir al Evento
              </Button>
            </div>
            <div className='flex w-[48%] items-start justify-center rounded-[20px] bg-gray-900 p-7 md:w-full sm:flex-col sm:p-5'>
              <div className='mt-3 flex flex-1 flex-col items-start self-center sm:self-stretch'>
                <Text color='white' as='p' className='uppercase tracking-[1.80px]'>
                  Actividad
                </Text>
                <Heading size='heading4' as='h1' className='mt-2.5 leading-[50px]'>
                  <>
                    Pinta caritas <br />y Algodon
                  </>
                </Heading>
                <div className='mt-3.5 flex items-center self-stretch'>
                  <Img
                    src='img_image_5.png'
                    width={22}
                    height={22}
                    alt='Imagefive'
                    className='h-[22px] w-[22px] object-cover'
                  />
                  <Text color='white' as='p'>
                    Los Alcarrizos, Santo Domingo
                  </Text>
                </div>
                <div className='ml-1.5 mt-9 flex flex-col items-start self-stretch md:ml-0'>
                  <Heading as='p' className='!text-[15px] !font-normal tracking-[1.50px]'>
                    Que haremos?
                  </Heading>
                  <Text color='white' as='p' className='mt-3 w-full leading-9 tracking-[3.06px]'>
                    Estaremos llevando pinta caritas , juegos inflables , máquinas de palomitas y
                    algodón a todos los niños de esta gran comunidad
                  </Text>
                  <Button
                    rightIcon={
                      <Img
                        src='img_arrowleft.svg'
                        width={18}
                        height={18}
                        alt='Arrow Left'
                        className='my-0.5 h-[18px] w-[18px]'
                      />
                    }
                    className='mr-[78px] mt-6 flex h-[60px] min-w-[250px] flex-row items-center justify-center gap-[34px] self-end rounded-lg bg-white-a700 pl-[34px] pr-6 text-center font-dmsans text-[16px] font-bold text-gray-900 md:mr-0 sm:px-5'
                  >
                    Ir al Evento
                  </Button>
                </div>
              </div>
              <div className='flex w-[10%] flex-col items-center justify-center rounded-lg bg-white-a700 py-2.5 sm:w-full sm:px-5'>
                <Heading
                  size='heading1'
                  as='h6'
                  className='text-center uppercase leading-5 tracking-[1.80px] !text-black-900'
                >
                  <>
                    25
                    <br />
                    MAY
                  </>
                </Heading>
              </div>
            </div>
          </div>
          <div className='flex justify-between gap-5 self-stretch md:flex-col'>
            <div className='flex w-[48%] items-start justify-center rounded-[20px] bg-gray-900 p-7 md:w-full sm:flex-col sm:p-5'>
              <div className='mt-3 flex flex-1 flex-col items-center self-center sm:self-stretch'>
                <Text color='white' as='p' className='self-start uppercase tracking-[1.80px]'>
                  Actividad
                </Text>
                <div className='mt-2.5 flex flex-col gap-3.5 self-stretch'>
                  <Heading size='heading4' as='h1' className='leading-[50px]'>
                    <>
                      Pinta caritas <br />y Algodon
                    </>
                  </Heading>
                  <div className='flex items-center'>
                    <Img
                      src='img_image_5.png'
                      width={22}
                      height={22}
                      alt='Imagefive'
                      className='h-[22px] w-[22px] object-cover'
                    />
                    <Text color='white' as='p'>
                      Los Alcarrizos, Santo Domingo
                    </Text>
                  </div>
                </div>
                <div className='ml-1.5 mt-9 flex flex-col items-start gap-3 self-stretch md:ml-0'>
                  <Heading as='p' className='!text-[15px] !font-normal tracking-[1.50px]'>
                    Que haremos?
                  </Heading>
                  <Text color='white' as='p' className='w-full leading-9 tracking-[3.06px]'>
                    Estaremos llevando pinta caritas , juegos inflables , máquinas de palomitas y
                    algodón a todos los niños de esta gran comunidad
                  </Text>
                </div>
                <Button
                  rightIcon={
                    <Img
                      src='img_arrowleft.svg'
                      width={18}
                      height={18}
                      alt='Arrow Left'
                      className='my-0.5 h-[18px] w-[18px]'
                    />
                  }
                  className='mr-[78px] mt-6 flex h-[60px] min-w-[250px] flex-row items-center justify-center gap-[34px] self-end rounded-lg bg-white-a700 pl-[34px] pr-6 text-center font-dmsans text-[16px] font-bold text-gray-900 md:mr-0 sm:px-5'
                >
                  Ir al Evento
                </Button>
              </div>
              <div className='flex w-[10%] flex-col items-center justify-center rounded-lg bg-white-a700 py-2.5 sm:w-full sm:px-5'>
                <Heading
                  size='heading1'
                  as='h6'
                  className='text-center uppercase leading-5 tracking-[1.80px] !text-black-900'
                >
                  <>
                    25
                    <br />
                    MAY
                  </>
                </Heading>
              </div>
            </div>
            <div className='flex w-[48%] flex-col items-end justify-center rounded-[20px] bg-blue_gray-700 px-[30px] py-7 md:w-full sm:p-5'>
              <div className='flex items-start justify-end gap-1 self-stretch sm:flex-col'>
                <div className='mt-2.5 flex flex-1 flex-col items-start gap-2.5 self-end sm:self-stretch'>
                  <Text color='white' as='p' className='uppercase tracking-[1.80px]'>
                    Actividad
                  </Text>
                  <Heading size='heading4' as='h1' className='w-full leading-[50px]'>
                    Jornada de Donación de Alimentos
                  </Heading>
                </div>
                <div className='flex w-[10%] flex-col items-center justify-center rounded-lg bg-white-a700 py-2.5 sm:w-full'>
                  <Heading
                    size='heading1'
                    as='h6'
                    className='text-center uppercase leading-5 tracking-[1.80px] !text-black-900'
                  >
                    <>
                      18
                      <br />
                      MAY
                    </>
                  </Heading>
                </div>
              </div>
              <div className='mt-2 flex items-center self-stretch'>
                <Img
                  src='img_image_5.png'
                  width={22}
                  height={22}
                  alt='Imagefive'
                  className='h-[22px] w-[22px] object-cover'
                />
                <Text color='white' as='p'>
                  Santo Domingo
                </Text>
              </div>
              <div className='ml-1.5 mt-[22px] flex flex-col items-start self-stretch md:ml-0'>
                <Heading as='p' className='!text-[15px] !font-normal tracking-[1.50px]'>
                  Que haremos?
                </Heading>
                <Text color='white' as='p' className='w-full leading-9 tracking-[3.06px]'>
                  Por cada comentario en Instagram donaremos una comida a una familia necesitada.
                  Únete a nuestro equipo acacia como voluntario y lleva ayuda directamente a quien
                  la necesite !!
                </Text>
              </div>
              <Button
                rightIcon={
                  <Img
                    src='img_arrowleft.svg'
                    width={18}
                    height={18}
                    alt='Arrow Left'
                    className='my-0.5 h-[18px] w-[18px]'
                  />
                }
                className='mr-[116px] mt-1 flex h-[60px] min-w-[250px] flex-row items-center justify-center gap-[34px] rounded-lg bg-white-a700 pl-[34px] pr-6 text-center font-dmsans text-[16px] font-bold text-gray-900 md:mr-0 sm:px-5'
              >
                Ir al Evento
              </Button>
            </div>
          </div>
          <div className='flex w-[26%] justify-center gap-1.5 md:w-full'>
            <Button className='flex h-[40px] min-w-[40px] flex-row items-center justify-center rounded-lg bg-gray-900 px-4 text-center text-[14px] font-medium text-white-a700'>
              1
            </Button>
            <Button className='flex h-[40px] min-w-[40px] flex-row items-center justify-center rounded-lg bg-blue_gray-700 px-3.5 text-center text-[14px] font-medium text-white-a700'>
              2
            </Button>
            <div className='flex w-full flex-col items-center rounded-lg'>
              <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
                <Heading as='p' className='!text-blue_gray-500'>
                  3
                </Heading>
              </div>
            </div>
            <div className='flex w-full flex-col items-center rounded-lg'>
              <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
                <Heading as='p' className='mt-2 !text-blue_gray-500'>
                  ...
                </Heading>
              </div>
            </div>
            <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
              <Heading as='p' className='!text-blue_gray-500'>
                8
              </Heading>
            </div>
            <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
              <Heading as='p' className='!text-blue_gray-500'>
                9
              </Heading>
            </div>
            <div className='flex w-[40px] flex-col items-center justify-center rounded-lg'>
              <Heading as='p' className='!text-blue_gray-500'>
                10
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
