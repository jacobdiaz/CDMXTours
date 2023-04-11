import CTALink from "@/components/actions/CTALink";
import HeroSmall from "@/components/layout/HeroSmall";
import SectionTitle from "@/components/sections/SectionTitle";
import { Gallery } from "@/utils/galleryData";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <>
      <HeroSmall
        title='Gallery'
        image='https://d252kj1i9nz0td.cloudfront.net/pages/Gallery/hero.jpg'
        ariaLabel='Gallery'
        backgroundPosition='center 20%'
      />

      <div className='px-12 md:pb-32 md:px-72'>
        <div className='flex flex-col justify-center mt-10 mb-5'>
          <div className='grid md:grid-cols-3'>
            <div className='md:col-span-2'>
              <SectionTitle margin='m-0'>Our Favorite Memories</SectionTitle>
              <p className='my-5'>
                We take great pride in the experiences we offer and the memories
                we help create. Here is a showcase of some of our favorite
                moments from past Mexico City bike tours. We know that the best
                memories often come from those who lived them. That's why we
                invite you to share your own photos and stories from your bike
                tour with us. We love seeing our tours through the eyes of our
                guests, and your images may even be featured on our website or
                social media pages.
              </p>
            </div>
            <div className='flex flex-col items-end justify-end'>
              <CTALink href='mailto:' variant='dark' grow>
                Send Us Your Photos
              </CTALink>
            </div>
          </div>
          <ul className='container grid md:grid-cols-3 gap-5'>
            {Gallery.map((img) => (
              <li key={img.src} className='h-[340px] relative overflow-hidden'>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={340}
                  height={340} // Set height and width to the same value
                  sizes='50vw'
                  loading='lazy'
                  className='absolute left-0 w-full h-full object-cover'
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
