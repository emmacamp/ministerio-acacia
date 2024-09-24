import { Heading, Text } from '@/components';

export const metadata = {
  title: 'Politicas de Autor',
};

export default function PoliticasDeAutor() {
  return (
    <div className='container-xs py-5 mx-auto'>
      <Heading color='dark' size='heading6' className='mb-2'>
        Politicas de Autor
      </Heading>
      <Text>
        <Heading color='dark' size='headinglg' className='mt-5 mb-2'>
          Propiedad del Contenido
        </Heading>
        Todo el contenido, incluyendo textos, imágenes, gráficos, logotipos, videos y otros
        materiales en este sitio web, está protegido por derechos de autor y es propiedad exclusiva
        de <span className='font-semibold'>Ministerio Acacia</span> o de sus respectivos titulares
        de derechos.
        <Heading color='dark' size='headinglg' className='mt-5 mb-2'>
          Uso Permitido
        </Heading>
        El contenido de este sitio web solo puede ser utilizado para fines personales y no
        comerciales. Queda prohibida la reproducción, distribución, modificación, exhibición pública
        o cualquier otro uso del contenido sin el consentimiento expreso por escrito de{' '}
        <span className='font-semibold'>Ministerio Acacia</span>.
        <br />
        <br />
        Solicitar Permiso Para obtener permiso para usar cualquier contenido de este sitio web fuera
        de los usos permitidos, por favor, contáctanos a través de{' '}
        <a
          href='mailto:acaciateam7@gmail.com'
          className='inline-block font-semibold hover:underline'
        >
          acaciateam7@gmail.com
        </a>{' '}
        para solicitar una licencia.
        <Heading color='dark' size='headinglg' className='mt-5 mb-2'>
          Responsabilidad por Uso No Autorizado
        </Heading>
        Cualquier uso no autorizado del contenido de este sitio web puede violar leyes de derechos
        de autor, marcas registradas y otras leyes aplicables, y puede resultar en sanciones
        legales.
        <Heading color='dark' size='headinglg' className='mt-5 mb-2'>
          Actualización de la Política
        </Heading>
        Nos reservamos el derecho de actualizar esta política en cualquier momento. Las
        modificaciones entrarán en vigor una vez publicadas en esta página.
      </Text>
    </div>
  );
}
