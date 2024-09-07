'use server';
import Link from 'next/link';
import { Text, Heading } from '../../components';

import axios from 'axios';
import { InstagramFeedDesktop, InstagramFeedMobile } from './InstagramFeed';

const getInstagramPosts = async () => {
  const token = process.env.INSTAGRAM_TOKEN_KEY;
  const userId = process.env.USER_ID;
  const fields = 'id,media_url';
  // const fields = 'id,media_type,media_url,username,timestamp';

  const url = `https://graph.instagram.com/v20.0/${userId}/media?fields=${fields}&access_token=${token}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    // console.error(error?.response.data);
    return [];
  }
};

export const RedesSection = async () => {
  const posts = (await getInstagramPosts()).data;

  return (
    <div data-aos='fade-up' className='bg-white-a700'>
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

          <InstagramFeedDesktop className='tablet:hidden' posts={posts} />
          <InstagramFeedMobile
            className='self-stretch phone-md:mx-1 mx-16 tablet:block hidden'
            posts={posts}
          />

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
  );
};
