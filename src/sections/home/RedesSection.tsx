'use server';
import Link from 'next/link';
import { Img, Text, Heading } from '../../components';

import axios from 'axios';

const getInstagramPosts = async () => {
  const token = process.env.INSTAGRAM_TOKEN_KEY;
  const userId = process.env.USER_ID;
  const fields = 'id,media_url';
  // const fields = 'id,media_type,media_url,username,timestamp';

  const url = `https://graph.instagram.com/v20.0/${userId}/media?fields=${fields}&access_token=${token}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any ) {
    // console.error(error?.response.data);
    return [];
  }
};

export const RedesSection = async () => {
  const posts = (await getInstagramPosts()).data;

  return (
    <div>
      <div className='bg-white-a700'>
        <div className='flex flex-col items-center bg-white-a700 py-14 md:py-5'>
          <div className='container-xs flex flex-col items-center gap-[50px] md:px-5'>
            <div className='ml-72 mr-[292px] flex flex-col items-center gap-2 self-stretch md:mx-0'>
              <Heading size='heading2' as='h2' className='!text-blue_gray-600 text-center'>
                <span className='text-black-900'>Síguenos</span>
                <span className='text-blue_gray-600'>&nbsp;</span>
                <span className='text-black-900'>en nuestras Redes</span>
              </Heading>
              <Text as='p' className='self-stretch text-center leading-[30px] !text-black-900'>
                ¡Sé el primero en conocer nuestros eventos y nuestras ultimas publicaciones!
              </Text>
            </div>
            <div className='self-stretch'>
              <div className='flex gap-7 md:flex-col'>
                <div className='flex flex-1 flex-col gap-7 md:self-stretch'>
                  <img
                    src={posts[0].media_url}
                    width={284}
                    height={284}
                    alt='Imagetwentytwo'
                    className='h-[284px] rounded-[24px] object-cover'
                  />
                  <img
                    src={posts[1].media_url}
                    width={284}
                    height={284}
                    alt='Imagetwentyfour'
                    className='h-[284px] rounded-[24px] object-cover'
                  />
                </div>
                <img
                  src={posts[2].media_url}
                  width={596}
                  height={596}
                  alt='Imagetwentyone'
                  className='h-[596px] w-[596px] rounded-[24px] object-cover md:w-full'
                />
                <div className='flex flex-1 flex-col gap-7 md:self-stretch'>
                  <img
                    src={posts[3].media_url}
                    width={284}
                    height={284}
                    alt='Imagetwentythre'
                    className='h-[284px] w-[284px] rounded-[24px] object-cover'
                  />
                  <img
                    src={posts[4].media_url}
                    width={284}
                    height={284}
                    alt='Imagetwentyone'
                    className='h-[284px] w-[284px] rounded-[24px] object-cover'
                  />
                </div>
              </div>
            </div>
            <Link
              href='https://linktr.ee/discauri'
              target='_blanck'
              className='flex h-[76px] min-w-[200px] flex-row items-center justify-center rounded-lg bg-gray-900 px-[34px] text-center text-[20px] font-bold text-white-a700 sm:px-5'
            >
              Síguenos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
