import db from '@/public/data/db.json';
import { Button, Heading, Img, Text } from '@/components';
import NotFound from '@/app/not-found';

export async function generateStaticParams() {
  return db.blogs.map((blog) => ({ slug: blog.url.toString() }));
}

export default function BlogDetails({ params }: { params: { slug: string } }) {
  const blog = db.blogs.find((blog) => blog.url === params.slug);

  if (!blog) {
    return <NotFound />;
  }

  return (
    <div className='flex w-full text-justify flex-col items-center bg-white-a700'>
      <div className='container-xs md:px-5'>
        <div className='flex flex-col items-center bg-white-a700 px-14 md:px-5'>
          <div className='mb-8 flex w-[72%] mt-5 flex-col gap-7 md:w-full'>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col items-start gap-4'>
                  <Button className='flex h-[32px] min-w-[92px] flex-row items-center justify-center rounded-lg bg-light_blue-700 px-3 text-center font-worksans text-[14px] font-medium text-white-a700'>
                    {blog?.buttonLabel}
                  </Button>
                  <Heading size='heading2' color='dark' as='h1' className='w-full leading-10'>
                    {blog?.titleText}
                  </Heading>
                </div>
                <div className='flex'>
                  <Text size='textxs' as='p' className='self-end !font-worksans !text-gray-600'>
                    {blog?.dateText}
                  </Text>
                </div>
              </div>
              <div className='flex flex-col gap-[30px]'>
                <Img
                  src={blog?.userImage}
                  width={800}
                  height={462}
                  alt={`image for ${blog?.titleText}`}
                  className='h-[462px] rounded-[24px] object-cover'
                />
                <Text
                  size='textlg'
                  as='div'
                  className='!font-sourceserifpro leading-8 !text-gray-800'
                >
                  <div
                    className='!font-sourceserifpro leading-8 !text-gray-800'
                    dangerouslySetInnerHTML={{ __html: blog?.content.introduction ?? '' }}
                  />
                </Text>

                {blog?.content.subjects.map((subject, i) => (
                  <div key={`subject-${i}`} className='flex flex-col items-start gap-3.5'>
                    <Heading color='dark' as='h2'>
                      {subject.title}
                    </Heading>
                    <Text
                      size='textlg'
                      as='div'
                      className='w-full !font-sourceserifpro leading-8 !text-gray-800'
                    >
                      <div
                        className='!font-sourceserifpro leading-8 !text-gray-800'
                        dangerouslySetInnerHTML={{ __html: subject.text ?? '' }}
                      ></div>
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
