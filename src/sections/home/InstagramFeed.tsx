'use client';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './instagram.css';
import { Post } from './RedesSection';
import Image from 'next/image';

interface FeedProps {
  className: string;
  posts: Post[];
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
              <Image
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
              <Image
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
            <Image
              src={posts[0].media_url}
              width={596}
              height={596}
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
              <Image
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
              <Image
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
        // controls
      />
    ) : (
      <Image
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
      <AliceCarousel
        autoPlay
        mouseTracking
        autoPlayInterval={2000}
        responsive={responsive}
        items={items}
      />
    </div>
  );
};

// export const InstagramFeedDesktop = ({ posts, className }: FeedProps) => {
//   return (
//     posts?.length > 0 && (
//       <div className={`self-stretch ${className}`}>
//         <div className='flex gap-7 phone-md:flex-col phone-md:justify-center phone-md:items-center'>
//           <div className='flex flex-1 flex-col gap-7 phone-md:w-full'>
//             < Image
//               src={posts[1].media_url}
//               width={284}
//               height={284}
//                alt='Instagram Feed''Imagetwentytwo'
//               className='h-[284px] rounded-[24px] object-cover phone-md:w-full'
//             />
//             < Image
//               src={posts[2].media_url}
//               width={284}
//               height={284}
//                alt='Instagram Feed''Imagetwentyfour'
//               className='h-[284px] rounded-[24px] object-cover phone-md:w-full'
//             />
//           </div>
//           < Image
//             src={posts[0].media_url}
//             width={596}
//             height={596}
//              alt='Instagram Feed''Imagetwentyone'
//             className='phone-md:justify-center phone-md:w-full phone-md:items-center tablet:w-[300px] phone-md:h-[284px] h-[596px] w-[596px] rounded-[24px] object-cover self-stretch'
//           />

//           <div className='flex flex-1 flex-col gap-7 self-stretch'>
//             < Image
//               src={posts[3].media_url}
//               width={284}
//               height={284}
//                alt='Instagram Feed''Imagetwentythre'
//               className='h-[284px] phone-md:w-full w-[284px] rounded-[24px] object-cover'
//             />
//             < Image
//               src={posts[4].media_url}
//               width={284}
//               height={284}
//                alt='Instagram Feed''Imagetwentyone'
//               className='h-[284px] phone-md:w-full w-[284px] rounded-[24px] object-cover'
//             />
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export const InstagramFeedMobile = ({ posts, className }: FeedProps) => {
//   const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();

//   const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
//   };

//   const items = [
//     < Image
//       key={posts[0].id}
//       src={posts[0].media_url}
//       onDragStart={handleDragStart}
//       className='item'
//       role='presentation'
//     />,
//     < Image
//       key={posts[1].id}
//       src={posts[1].media_url}
//       onDragStart={handleDragStart}
//       className='item'
//       role='presentation'
//     />,
//     < Image
//       key={posts[2].id}
//       src={posts[2].media_url}
//       onDragStart={handleDragStart}
//       className='item'
//       role='presentation'
//     />,
//     < Image
//       key={posts[3].id}
//       src={posts[3].media_url}
//       onDragStart={handleDragStart}
//       className='item'
//       role='presentation'
//     />,
//     < Image
//       key={posts[4].id}
//       src={posts[4].media_url}
//       onDragStart={handleDragStart}
//       className='item'
//       role='presentation'
//     />,
//   ];

//   return (
//     <div className={`h-[auto] rounded-md overflow-hidden ${className}`}>
//       <AliceCarousel
//         autoPlay
//         mouseTracking
//         autoPlayInterval={2000}
//         responsive={responsive}
//         items={items}

//         // // controlsStrategy='alternate'
//       />
//     </div>
//   );
// };
