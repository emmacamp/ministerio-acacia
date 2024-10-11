/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false });

import 'react-alice-carousel/lib/alice-carousel.css';
import './instagram.css';
import { Post } from '@/types/post';

interface FeedProps {
  posts: Post[];
  className?: string;
}

export const InstagramFeedDesktop = ({ posts, className }: FeedProps) => {
  return (
    posts?.length > 0 && (
      <div className={`self-stretch ${className}`}>
        <div className='flex gap-7 phone-md:flex-col phone-md:justify-center phone-md:items-center'>
          <div className='flex flex-1 flex-col gap-7 phone-md:w-full'>
            {posts[1].media_type === 'VIDEO' ? (
              <video
                src={posts[1].media_url}
                autoPlay
                loop
                muted
                playsInline
                // controls
                width={284}
                height={284}
                className='h-[284px] rounded-[24px] object-cover phone-md:w-full'
              />
            ) : (
              <img
                src={posts[1].media_url}
                width={284}
                height={284}
                alt='Instagram Feed'
                className='h-[284px] rounded-[24px] object-cover phone-md:w-full'
              />
            )}
            {posts[2].media_type === 'VIDEO' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                src={posts[2].media_url}
                width={284}
                height={284}
                className='h-[284px] rounded-[24px] object-cover phone-md:w-full'
                // controls
              />
            ) : (
              <img
                src={posts[2].media_url}
                width={284}
                height={284}
                alt='Instagram Feed'
                className='h-[284px] rounded-[24px] object-cover phone-md:w-full'
              />
            )}
          </div>
          {posts[0].media_type === 'VIDEO' ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              src={posts[0].media_url}
              width={596}
              height={596}
              className='phone-md:w-full phone-md:h-[284px] h-[596px] w-[596px] rounded-[24px] object-cover self-stretch'
              // controls
            />
          ) : (
            <img
              src={posts[0].media_url}
              alt='Instagram Feed'
              className='phone-md:w-full phone-md:h-[284px] h-[596px] w-[596px] rounded-[24px] object-cover self-stretch'
            />
          )}

          <div className='flex flex-1 flex-col gap-7 self-stretch'>
            {posts[3].media_type === 'VIDEO' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                src={posts[3].media_url}
                width={284}
                height={284}
                className='h-[284px] phone-md:w-full w-[284px] rounded-[24px] object-cover'
                // controls
              />
            ) : (
              <img
                src={posts[3].media_url}
                width={284}
                height={284}
                alt='Instagram Feed'
                className='h-[284px] phone-md:w-full w-[284px] rounded-[24px] object-cover'
              />
            )}
            {posts[4].media_type === 'VIDEO' ? (
              <video
                autoPlay
                muted
                playsInline
                loop
                src={posts[4].media_url}
                width={284}
                height={284}
                className='h-[284px] phone-md:w-full w-[284px] rounded-[24px] object-cover'
                // controls
              />
            ) : (
              <img
                src={posts[4].media_url}
                width={284}
                height={284}
                alt='Instagram Feed'
                className='h-[284px] phone-md:w-full w-[284px] rounded-[24px] object-cover'
              />
            )}
          </div>
        </div>
      </div>
    )
  );
};

export const InstagramFeedMobile = ({ posts, className }: FeedProps) => {
  const [clientLoaded, setClientLoaded] = useState(false);

  useEffect(() => {
    setClientLoaded(true);
  }, []);

  const handleDragStart = (e: React.DragEvent<HTMLImageElement | HTMLVideoElement>) =>
    e.preventDefault();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = posts.map((post) =>
    post.media_type === 'VIDEO' ? (
      <video
        key={post.id}
        src={post.media_url}
        autoPlay
        muted
        loop
        playsInline
        onDragStart={handleDragStart}
        className='item'
        role='presentation'
      />
    ) : (
      <img
        key={post.id}
        src={post.media_url}
        width={800}
        height={500}
        alt='Instagram Feed'
        onDragStart={handleDragStart}
        className='item !object-cover'
        role='presentation'
      />
    )
  );

  return (
    <div className={`h-[auto] rounded-md overflow-hidden ${className}`}>
      {clientLoaded && (
        <AliceCarousel
          autoPlay
          mouseTracking
          disableButtonsControls
          autoPlayInterval={2000}
          responsive={responsive}
          items={items}
        />
      )}
    </div>
  );
};
