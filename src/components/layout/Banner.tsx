import Image from "next/image";
import ImageOverlay from "./ImageOverlay";

type BannerProps = {
  src: string;
  alt: string;
  children: React.ReactNode;
};

const Banner = ({ src, alt, children }: BannerProps) => (
  <div className='h-banner relative mt-20'>
    <Image
      src={src}
      alt={alt}
      className='object-cover w-full h-full'
      width={1080}
      height={720}
      loading='lazy'
    />
    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center text-white'>
      <h4 className='text-3xl p-10 text-center md:text-6xl font-fjalla z-10'>
        {children}
      </h4>
    </div>
    <ImageOverlay />
  </div>
);

export default Banner;
