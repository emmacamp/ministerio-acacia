'use client';
import Link from 'next/link';
import { Text, Heading } from '../../components';
import { InstagramFeedDesktop, InstagramFeedMobile } from './InstagramFeed';

import { Post } from '@/types/post';
import { useEffect, useState } from 'react';
import { FeedPost } from '@/app/api/instagram-posts/route';

export function RedesSection() {
  const [posts, setPosts] = useState<FeedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/instagram-posts');
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }
        const data = await response.json();
        setPosts(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Las publicaciones de Instagram no pudieron ser cargadas.');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (error) {
    return (
      <div className='mx-auto text-center text-red-500 bg-red-100 w-fit rounded-sm p-2 my-10'>
        {error}
      </div>
    );
  }

  return (
    <div data-aos='fade-up' className='bg-white-a700 px-4'>
      <div className='flex flex-col items-center bg-white-a700 py-14 md:py-5'>
        <div className='container-xs flex flex-col items-center gap-[50px] md:px-5'>
          <div className='ml-72 mr-[292px] flex flex-col items-center gap-2 self-stretch md:mx-0'>
            <Heading size='heading2' as='h2' color='dark' className=' text-center'>
              Siguenos en nuestras Redes
            </Heading>
            <Text as='p' className='self-stretch text-center leading-[30px] !text-black-900'>
              ¡Sé el primero en conocer nuestros eventos y nuestras ultimas publicaciones!
            </Text>
          </div>
          {loading ? <IntagramFeedLoader /> : <Feed posts={posts} />}

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
}

const Feed = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <InstagramFeedDesktop className='tablet:hidden' posts={posts} />
      <InstagramFeedMobile
        className='self-stretch phone-md:mx-1 mx-16 tablet:block hidden'
        posts={posts}
      />
    </>
  );
};

const IntagramFeedLoader = () => (
  <div className='shadow rounded-md w-full p-4 max-w-sm mx-auto'>
    <div className='animate-pulse flex space-x-4'>
      <div className=' bg-slate-700 h-auto w-10 rounded'></div>
      <div className='flex-1 space-y-6 py-1'>
        <div className='h-[100px] bg-slate-700 rounded'></div>
        <div className='space-y-3'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='h-[100px] bg-slate-700 rounded col-span-2'></div>
            <div className='h-[100px] bg-slate-700 rounded col-span-1'></div>
          </div>
          <div className='h-[100px] bg-slate-700 rounded'></div>
        </div>
      </div>
    </div>
  </div>
);
