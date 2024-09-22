import db from '@/public/data/db.json';
import { Heading } from '@/components';
import NotFound from '@/app/not-found';

export async function generateStaticParams() {
  return db.services.map((service) => ({ slug: service.url.toString() }));
}

export default function ServiceDetails({ params }: { params: { slug: string } }) {
  const service = db.services.find((service) => service.url === params.slug);

  if (!service) {
    return <NotFound />;
  }
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(/images/${service?.extended_image})`,
        }}
        className={`flex h-[386px] items-center justify-center bg-gray-900  bg-cover bg-no-repeat py-[138px] md:h-auto md:py-5`}
      >
        <div className='container-xs flex justify-center px-14 md:px-5'>
          <Heading
            data-aos='fade-up'
            as='h1'
            size='heading2xl'
            className='!font-inter text-center tracking-[-3.20px] !text-white-a700'
          >
            {service?.title}
          </Heading>
        </div>
      </div>
      <div className='mt-[72px] flex justify-center'>
        <div className='container-xs flex flex-col justify-center'>
          <Heading color='dark' size='headinglg' as='h1' className='px-5 !font-dmsans mb-3'>
            {service?.subtitle}
          </Heading>
          <div color='dark' className='px-5 !font-inter leading-9 tracking-[3.06px]'>
            <p className='mb-10 '>{service?.description}</p>
            <ul className='flex flex-col gap-3 list-disc'>
              {service?.content.map((des) => {
                return (
                  des?.subtitle && (
                    <li
                      key={des?.paragraph + des?.subtitle}
                      className='flex flex-col gap-5 my-5 list-disc'
                    >
                      <Heading color='dark' size='headinglg' as='h1' className='!font-dmsans'>
                        &gt; {des?.subtitle}
                      </Heading>
                      <p className='ms-5'>{des?.paragraph}</p>
                    </li>
                  )
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
