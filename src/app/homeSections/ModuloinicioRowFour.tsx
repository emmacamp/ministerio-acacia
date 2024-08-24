import { Text, Heading, Img } from '../../components';

export default function ModuloinicioRowFour() {
  return (
    <div>
      <div className='flex justify-center bg-blue_gray-700 py-14 md:py-5'>
        <div className='container-xs flex justify-center md:px-5'>
          <div className='flex w-full items-center gap-[30px] rounded-[40px] bg-white-a700 px-[42px] py-[46px] md:flex-col md:p-5'>
            <Img
              src='img_image_7.png'
              width={536}
              height={670}
              alt='Imageseven'
              className='h-[670px] w-[48%] rounded-[40px] object-contain md:w-full'
            />
            <div className='flex flex-1 flex-col items-center gap-6 md:self-stretch'>
              <Heading
                size='headinglg'
                as='h2'
                className='w-[98%] leading-[72px] tracking-[-2.00px] !text-gray-900 md:w-full'
              >
                Transformando Vidas e Impactando al Mundo
              </Heading>
              <Text size='textxs' as='p' className='w-full !font-inter leading-9 tracking-[2.55px]'>
                <span>La&nbsp;</span>
                <span className='font-bold'>misión de Acacia</span>
                <span>
                  &nbsp;se centra en transformar vidas mediante el poder del Espíritu Santo. Su
                  propósito es guiar a las personas hacia una&nbsp;
                </span>
                <span className='font-bold'>relación profunda con Dios</span>
                <span>
                  <>
                    , ofreciendo salvación y restauración espiritual. Además, se enfoca en empoderar
                    a cada individuo para que descubra y viva su propósito divino, inspirando una
                    vida llena de fe y acción.
                    <br />
                    En cuanto a su&nbsp;
                  </>
                </span>
                <span className='font-bold'>visión</span>
                <span>, Acacia aspira a impactar globalmente a través de la&nbsp;</span>
                <span className='font-bold'>
                  manifestación palpable de Dios, extendiendo su gloria por todo el mundo. Se
                  comprometen a ser testigos fieles y a capacitar a nuevas generaciones de líderes
                  proféticos que continuarán esta misión, asegurando que el mensaje de Dios siga
                  siendo compartido con pasión y propósito.
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
