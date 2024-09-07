'use client';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './instagram.css';

interface FeedProps {
  className: string;
  posts: {
    id: string;
    media_url: string;
  }[];
}

export const InstagramFeedDesktop = ({ posts, className }: FeedProps) => {
  return (
    posts?.length > 0 && (
      <div className={`self-stretch ${className}`}>
        <div className='flex gap-7 phone-md:flex-col phone-md:justify-center phone-md:items-center'>
          <div className='flex flex-1 flex-col gap-7 phone-md:w-full'>
            <img
              src={posts[0].media_url}
              width={284}
              height={284}
              alt='Imagetwentytwo'
              className='h-[284px] rounded-[24px] object-cover phone-md:w-full'
            />
            <img
              src={posts[1].media_url}
              width={284}
              height={284}
              alt='Imagetwentyfour'
              className='h-[284px] rounded-[24px] object-cover phone-md:w-full'
            />
          </div>
          <img
            src={posts[2].media_url}
            width={596}
            height={596}
            alt='Imagetwentyone'
            className='phone-md:justify-center phone-md:w-full phone-md:items-center tablet:w-[300px] phone-md:h-[284px] h-[596px] w-[596px] rounded-[24px] object-cover self-stretch'
          />

          <div className='flex flex-1 flex-col gap-7 self-stretch'>
            <img
              src={posts[3].media_url}
              width={284}
              height={284}
              alt='Imagetwentythre'
              className='h-[284px] phone-md:w-full w-[284px] rounded-[24px] object-cover'
            />
            <img
              src={posts[4].media_url}
              width={284}
              height={284}
              alt='Imagetwentyone'
              className='h-[284px] phone-md:w-full w-[284px] rounded-[24px] object-cover'
            />
          </div>
        </div>
      </div>
    )
  );
};

export const InstagramFeedMobile = ({ posts, className }: FeedProps) => {
  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <img
      key={posts[0].id}
      src={posts[0].media_url}
      onDragStart={handleDragStart}
      className='item'
      role='presentation'
    />,
    <img
      key={posts[1].id}
      src={posts[1].media_url}
      onDragStart={handleDragStart}
      className='item'
      role='presentation'
    />,
    <img
      key={posts[2].id}
      src={posts[2].media_url}
      onDragStart={handleDragStart}
      className='item'
      role='presentation'
    />,
    <img
      key={posts[3].id}
      src={posts[3].media_url}
      onDragStart={handleDragStart}
      className='item'
      role='presentation'
    />,
    <img
      key={posts[4].id}
      src={posts[4].media_url}
      onDragStart={handleDragStart}
      className='item'
      role='presentation'
    />,
  ];

  return (
    <div className={`h-[auto] rounded-md overflow-hidden ${className}`}>
      <AliceCarousel
        autoPlay
        mouseTracking
        autoPlayInterval={2000}
        responsive={responsive}
        items={items}

        // controlsStrategy='alternate'
      />
    </div>
  );
};
