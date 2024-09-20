import Image from 'next/image';
interface Props {
  src: string;
  phone_hidden: boolean;
}

export const Founder = ({ src, phone_hidden }: Props) => {
  return (
    <div
      data-aos='fade-up'
      className={`flex flex-col justify-center items-center w-[32%] md:w-full`}
      suppressHydrationWarning
    >
      <Image
        src={src}
        width={350}
        height={462}
        alt='founder image'
        className={`h-[462px]  rounded-[20px] object-cover self-center ${phone_hidden == true ? 'tablet:hidden' : ''}`}
      />
    </div>
  );
};
